import React from 'react';

import Clock from './Clock';

import ProgressBar from './ProgressBar';

import { getMinutesAndSecondsFromDuration } from '../lib/time'


export default class CurrentTimebox extends React.Component {
    constructor(props) {
        console.count("constructor")
        super(props);
        this.state = {
            isRunning: false,
            isPaused: false,
            paeusesCount: 0,
            elapsedTimeInSeconds: 0
        }
        this.intervalId = null;
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.togglePause = this.togglePause.bind(this);
    }
    componentDidMount() {
        console.count("Component DidMount")
    }
    componentDidUpdate() {
        console.count("Component DidUpdate")
    }
    componentWillUnmount() {
        this.stopTimer();
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
        if (this.intervalId === null) {

            this.intervalId = window.setInterval(
                () => {
                    this.setState(
                        (prevState) => ({ elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 0.1 })
                    )
                },
                100
            );
        }
    }
    stopTimer() {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
    }
    togglePause() {
        this.setState(
            function (prevState) {
                console.count("setState");
                debugger
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
        console.count('Render')
        const { isRunning, isPaused, paeusesCount, elapsedTimeInSeconds } = this.state;
        const { title, totalTimeInMinutes, isEditable, onEdit } = this.props;
        const totalTimeInSeconds = parseInt(totalTimeInMinutes, 10) * 60;
        const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;

        const [minutesLeft, secondsLeft] = getMinutesAndSecondsFromDuration(timeLeftInSeconds);
        const progressInPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100;

        return (
            <React.StrictMode>
                <div className="TimeBox">
                    <h1>{title}</h1>
                    <Clock minutes={minutesLeft} seconds={secondsLeft} className={isPaused ? 'inactive' : ''} />
                    <ProgressBar procent={progressInPercent} className={isPaused ? 'inactive' : ''} />
                    <button onClick={this.handleStart} disabled={isRunning}>Zacznij</button>
                    <button onClick={onEdit} disabled={isEditable}>Edytuj</button>
                    <button onClick={this.handleStop} disabled={!isRunning}>Stop</button>
                    <button onClick={this.togglePause} disabled={!isRunning}>{isPaused ? 'Wznów' : 'Pauza'}</button>
                        LIczba przerw: {paeusesCount}
                </div>
            </React.StrictMode>
        )
    }
}