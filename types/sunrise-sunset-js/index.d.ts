// Type definitions for sunrise-sunset-js 2.0
// Project: https://github.com/udivankin/sunrise-sunset
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function getSunrise(
    latitude: number,
    longitude: number,
    date?: Date
): Date;

export function getSunset(
    latitude: number,
    longitude: number,
    date?: Date
): Date;
