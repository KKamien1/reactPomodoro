import React from 'react';


export default function TimeBoxEditor(props) {

    const { title, totalTimeInMinutes, onStateChange, isEditable, onConfirm } = props;

    return (
        <div className="TimeboxEditor" className={isEditable ? '' : 'inactive'}>
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
        </div>
    )
}

