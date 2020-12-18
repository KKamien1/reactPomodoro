import React from 'react';


export default function TimeBox({ title, totalTimeInMinutes, onDelete, onEdit }) {
    if (totalTimeInMinutes <= 0) {
        throw Error('Lipppa')

    }
    return (
        <div className="TimeBox">
            <h3>{title} - {totalTimeInMinutes} min</h3>
            <button onClick={onDelete}>Usuń</button>
            <button onClick={onEdit}>Zmień</button>
        </div>
    )
}