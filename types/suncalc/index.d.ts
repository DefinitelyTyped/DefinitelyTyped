// Type definitions for suncalc 1.8
// Project: https://github.com/mourner/suncalc
// Definitions by: horiuchi <https://github.com/horiuchi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface GetTimesResult {
    dawn: Date;
    dusk: Date;
    goldenHour: Date;
    goldenHourEnd: Date;
    nadir: Date;
    nauticalDawn: Date;
    nauticalDusk: Date;
    night: Date;
    nightEnd: Date;
    solarNoon: Date;
    sunrise: Date;
    sunriseEnd: Date;
    sunset: Date;
    sunsetStart: Date;
}
export interface GetSunPositionResult {
    altitude: number;
    azimuth: number;
}
export interface GetMoonPositionResult {
    altitude: number;
    azimuth: number;
    distance: number;
    parallacticAngle: number;
}
export interface GetMoonIlluminationResult {
    fraction: number;
    phase: number;
    angle: number;
}
export interface GetMoonTimes {
    rise: Date;
    set: Date;
    alwaysUp?: true;
    alwaysDown?: true;
}

export function getTimes(date: Date, latitude: number, longitude: number): GetTimesResult;
export function addTime(angleInDegrees: number, morningName: string, eveningName: string): void;
export function getPosition(timeAndDate: Date, latitude: number, longitude: number): GetSunPositionResult;
export function getMoonPosition(timeAndDate: Date, latitude: number, longitude: number): GetMoonPositionResult;
export function getMoonIllumination(timeAndDate: Date): GetMoonIlluminationResult;
export function getMoonTimes(date: Date, latitude: number, longitude: number, inUTC?: boolean): GetMoonTimes;
