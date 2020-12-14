import React from 'react';

import Clock from './Clock';

import ProgressBar from './ProgressBar';


export default class CurrentTimebox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            isPaused: false,
            paeusesCount: 0,
            elapsedTimeInSeconds: 0
        }
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.togglePause = this.togglePause.bind(this);
    }
    handleStart() {
        this.setState({
            isRunning: true,
        });
        this.startTimer();
    }
    handleStop(e) {
        this.setState({
            isRunning: false,
            isPaused: false,
            paeusesCount: 0,
            elapsedTimeInSeconds: 0
        });
        this.stopTimer()
    }
    startTimer() {
        this.intervalId = window.setInterval(
            () => {
                this.setState(
                    (prevState) => ({ elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 0.1 })
                )
            },
            100
        );
    }
    stopTimer() {
        window.clearInterval(this.intervalId);
    }
    togglePause() {
        this.setState(
            function (prevState) {
                const isPaused = !prevState.isPaused;
                if (isPaused) {
                    this.stopTimer();
                } else {
                    this.startTimer();
                }
                return {
                    isPaused,
                    paeusesCount: isPaused ? prevState.paeusesCount + 1 : prevState.paeusesCount
                }
            }
        )
    }
    render() {
        const { isRunning, isPaused, paeusesCount, elapsedTimeInSeconds } = this.state;
        const { title, totalTimeInMinutes, isEditable, onEdit } = this.props;
        const totalTimeInSeconds = parseInt(totalTimeInMinutes, 10) * 60;
        const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;

        const minutesLeft = Math.floor(timeLeftInSeconds / 60);
        const secondsLeft = Math.floor(timeLeftInSeconds % 60);
        const progressInPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100;

        return (
            [<div className="TimeBox">
                <h1>{title}</h1>
                <Clock minutes={minutesLeft} seconds={secondsLeft} className={isPaused ? 'inactive' : ''} />
                <ProgressBar procent={progressInPercent} className={isPaused ? 'inactive' : ''} />
                <button onClick={this.handleStart} disabled={isRunning}>Zacznij</button>
                <button onClick={onEdit} disabled={isEditable}>Edytuj</button>
                <button onClick={this.handleStop} disabled={!isRunning}>Stop</button>
                <button onClick={this.togglePause} disabled={!isRunning}>{isPaused ? 'Wznów' : 'Pauza'}</button>
                        LIczba przerw: {paeusesCount}
            </div>]
        )
    }
}