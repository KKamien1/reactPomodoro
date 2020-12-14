import React from 'react';

export default class TimeBoxCreator extends React.Component {

    state = {
        title: '',
        totalTimeInMinutes: ''
    }

    handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    handleSubmit = (event) => {
        const { onCreate } = this.props;
        event.preventDefault();
        onCreate(this.state);
        this.setState({
            title: '',
            totalTimeInMinutes: ''
        })
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit} className="TimeBoxCreator" >
                <label>Co robisz?
                            <input
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                        type="text" />
                </label>
                <label>Ile minut
                            <input
                        name="totalTimeInMinutes"
                        onChange={this.handleChange}
                        value={this.state.totalTimeInMinutes}
                        type="text"
                        type="number"
                    />
                </label>
                <button>Dodaj timebox</button>
            </form>
        )
    }
}