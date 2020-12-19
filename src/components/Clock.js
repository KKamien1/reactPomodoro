import React from 'react';
import PropTypes from 'prop-types';

function Clock({ hours, minutes, seconds, miliseconds }) {
    const format = (digits = 2, max = 59, placeholder = "0") => num => Math.min(Math.max(0, num), max).toString().padStart(digits, placeholder);

    const to24 = format(2, 23);
    const to60 = format();          // default setup for minutes and seconds
    const to1000 = format(3, 999);

    const h = to24(hours);
    const ms = to1000(miliseconds);
    const [m, s] = [minutes, seconds].map(to60);

    return (<h2 className="clock">Pozostało {h}:
        <span className="clock__min">{m}</span>
        <span className="clock__sepator">:</span>
        <span className="clock__sec">{s}</span>
        .{ms}</h2>);
}

Clock.propTypes = {
    hours: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    miliseconds: PropTypes.number.isRequired,
}

Clock.defaultProps = {
    hours: 0,
    minutes: 20,
    seconds: 0,
    miliseconds: 0
}


export default Clock;