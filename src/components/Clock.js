import React from 'react';

function Clock({ hours = 34, minutes = -77, seconds = -77, miliseconds = 3 }) {
    const format = (digits = 2, max = 59, placeholder = "0") => num => Math.min(Math.max(0, num), max).toString().padStart(digits, placeholder);

    const to24 = format(2, 23);
    const to60 = format();          // default setup for minutes and seconds
    const to1000 = format(3, 999);

    const h = to24(hours);
    const ms = to1000(miliseconds);
    const [m, s] = [minutes, seconds].map(to60);

    return (<h2 className="Clock">Pozostało {h}:{m}:{s}.{ms}</h2>);
}

export default Clock;