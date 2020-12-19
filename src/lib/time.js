

export const getMinutesAndSecondsFromDuration = (duration) => {
    const minutesLeft = Math.floor(duration / 60);
    const secondsLeft = Math.floor(duration % 60);

    return [minutesLeft, secondsLeft];
}