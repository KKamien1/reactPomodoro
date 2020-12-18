import React from 'react';
import classnames from 'classnames'


export default function TimeBoxEditor(props) {

    const { title, totalTimeInMinutes, onStateChange, isEditable, onConfirm } = props;
    const classes = classnames(
        'timeboxEditor',
        {
            'inactive': !isEditable
        })
    return (
        <div className={classes}>
            <label>Co robisz?
                        <input
                    name="title"
                    disabled={false}
                    type="text"
                    onChange={onStateChange}
                    value={title} />
            </label>
            <label>Ile minut
                        <input
                    name="totalTimeInMinutes"
                    disabled={false}
                    type="text"
                    onChange={onStateChange}
                    value={totalTimeInMinutes} />
            </label>
            <button disabled={false} onClick={onConfirm}>Zatwierdź zmiany</button>
        </div >
    )
}

