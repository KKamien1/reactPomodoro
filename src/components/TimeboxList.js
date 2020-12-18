import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

import TimeBox from './TimeBox'
import TimeBoxCreator from './TimeBoxCreator'
import Error from './Error'

export default class TimeboxList extends React.Component {

    state = {
        timeboxes: [
            { id: uuid(), title: "dasfasdfa", totalTimeInMinutes: 34 },
            { id: uuid(), title: "Robie lepiej", totalTimeInMinutes: 34 },
            { id: uuid(), title: "Widzę wszystko", totalTimeInMinutes: 34 },
            { id: uuid(), title: "Super", totalTimeInMinutes: 34 }
        ]
    }

    addTimebox = (timebox) => {
        this.setState((prevState) => {
            const timeboxes = [timebox, ...prevState.timeboxes];
            return { timeboxes }
        });
    }
    removeTimebox = (indexToRemove) => {
        this.setState((prevState) => {
            const timeboxes = prevState.timeboxes.filter((timebox, index) => index !== indexToRemove);
            return { timeboxes };
        })
    }
    updateTimebox = (indexToUpdate, updatedTimebox) => {
        this.setState((prevState) => {
            const timeboxes = prevState.timeboxes.map((timebox, index) => index === indexToUpdate ? updatedTimebox : timebox);
            return { timeboxes };
        })
    }
    handleCreate = createdTimebox => this.addTimebox(createdTimebox);
    render() {

        const { timeboxes } = this.state;
        const content = timeboxes.map((timebox, index) => (
            <TimeBox
                key={timebox.id}
                title={timebox.title}
                totalTimeInMinutes={timebox.totalTimeInMinutes}
                onEdit={() => this.updateTimebox(index, { ...timebox, id: uuid(), title: 'Updated' })}
                onDelete={() => this.removeTimebox(index)} />
        ));

        return (
            <>
                <TimeBoxCreator onCreate={this.handleCreate} />
                <Error message="Coś nie gra tutaj">
                    {content}
                </Error>
            </>
        )
    }
}