
import { getMinutesAndSecondsFromDuration } from '../../lib/time'


describe('getMinutesAndSecondsFromDuration from lib', () => {
    test("works with 30 seconds", () => {
        expect(getMinutesAndSecondsFromDuration(30)).toEqual([0, 30]);
    })
    test("works with 140 seconds", () => {
        expect(getMinutesAndSecondsFromDuration(140)).toEqual([2, 20]);
    })
    test("works with 60 seconds", () => {
        expect(getMinutesAndSecondsFromDuration(60)).toEqual([1, 0]);
    })
})

