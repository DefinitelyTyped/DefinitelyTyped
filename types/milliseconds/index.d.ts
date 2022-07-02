// Type definitions for milliseconds
// Project: http://npmjs.com/milliseconds
// Definitions by: Elmar Burke <github.com/elmarburke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Milliseconds {
    seconds(seconds: number): number
    minutes(minutes: number): number
    hours(hours: number): number
    days(days: number): number
    weeks(weeks: number): number
    months(months: number): number
    years(years: number): number
}

declare var milliseconds: Milliseconds

declare module 'milliseconds' {
    export = milliseconds
}
