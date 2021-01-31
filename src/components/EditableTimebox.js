import React from 'react';

import CurrentTimebox from './CurrentTimebox';
import TimeBoxEditor from './TimeBoxEditor';

export default class EditableTimebox extends React.Component {
    state = {
        title: "Uczę się skrótów klawiszowych",
        totalTimeInMinutes: 15,
        isEditable: false
    }
    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });
    handleConfirm = () => this.setState({ isEditable: false });
    handleEdit = () => this.setState({ isEditable: true });
    render() {
        const { title, totalTimeInMinutes, isEditable } = this.state;

        return (
            <>
                {isEditable ?
                    (<TimeBoxEditor title={title} totalTimeInMinutes={totalTimeInMinutes} onStateChange={this.handleChange} isEditable={isEditable} onConfirm={this.handleConfirm} />)
                    : (<CurrentTimebox title={title} totalTimeInMinutes={totalTimeInMinutes} onEdit={this.handleEdit} isEditable={isEditable} />)
                }
            </>
        )
    }
}

