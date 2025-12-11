/**
 * Sunlight times result Object
 * 
 * https://github.com/mourner/suncalc?tab=readme-ov-file#sunlight-times
 */
export interface GetTimesResult {
    /**
     * dawn (morning nautical twilight ends, morning civil twilight starts)
     */
    dawn: Date;
    /**
     * dusk (evening nautical twilight starts)
     */
    dusk: Date;
    /**
     * evening golden hour starts
     */
    goldenHour: Date;
    /**
     * morning golden hour (soft light, best time for photography) ends
     */
    goldenHourEnd: Date;
    /**
     * nadir (darkest moment of the night, sun is in the lowest position)
     */
    nadir: Date;
    /**
     * nautical dawn (morning nautical twilight starts)
     */
    nauticalDawn: Date;
    /**
     * nautical dusk (evening astronomical twilight starts)
     */
    nauticalDusk: Date;
    /**
     * night starts (dark enough for astronomical observations)
     */
    night: Date;
    /**
     * night ends (morning astronomical twilight starts)
     */
    nightEnd: Date;
    /**
     * solar noon (sun is in the highest position)
     */
    solarNoon: Date;
    /**
     * sunrise (top edge of the sun appears on the horizon)
     */
    sunrise: Date;
    /**
     * sunrise ends (bottom edge of the sun touches the horizon)
     */
    sunriseEnd: Date;
    /**
     * sunset (sun disappears below the horizon, evening civil twilight starts)
     */
    sunset: Date;
    /**
     * sunset starts (bottom edge of the sun touches the horizon)
     */
    sunsetStart: Date;
}

/**
 * Sun position result Object
 * 
 * https://github.com/mourner/suncalc?tab=readme-ov-file#sun-position
 */
export interface GetSunPositionResult {
    /**
     * sun altitude above the horizon in radians, e.g. `0` at the horizon and `PI/2` at the zenith (straight over your head)
     */
    altitude: number;
    /**
     * sun azimuth in radians (direction along the horizon, measured from south to west), e.g. `0` is south and `Math.PI * 3/4` is northwest
     */
    azimuth: number;
}

/**
 * Moon position result Object
 * 
 * https://github.com/mourner/suncalc?tab=readme-ov-file#moon-position
 */
export interface GetMoonPositionResult {
    /**
     * moon altitude above the horizon in radian
     */
    altitude: number;
    /**
     * moon azimuth in radians
     */
    azimuth: number;
    /**
     * distance to moon in kilometers
     */
    distance: number;
    /**
     * parallactic angle of the moon in radians
     */
    parallacticAngle: number;
}

/**
 * Moon illumination result Object
 * 
 * https://github.com/mourner/suncalc?tab=readme-ov-file#moon-illumination
 */
export interface GetMoonIlluminationResult {
    /**
     * illuminated fraction of the moon; varies from `0.0` (new moon) to `1.0` (full moon)
     */
    fraction: number;
    /**
     * moon phase; varies from `0.0` to `1.0`
     * 
     * See https://github.com/mourner/suncalc?tab=readme-ov-file#moon-illumination for moon phase interpretation
     */
    phase: number;
    /**
     * midpoint angle in radians of the illuminated limb of the moon reckoned eastward from the north point of the disk; the moon is waxing if the angle is negative, and waning if positive
     */
    angle: number;
}

/**
 * Moon rise and set times result Object
 * 
 * https://github.com/mourner/suncalc?tab=readme-ov-file#moon-rise-and-set-times
 */
export interface GetMoonTimesResult {
    /**
     * moonrise (top edge of the moon appears on the horizon)
     */
    rise?: Date;
    /**
     * moonset (moon disappears below the horizon)
     */
    set?: Date;
    /**
     * `true` if the moon never rises/sets and is _always_ above the horizon during the day
     */
    alwaysUp?: true;
    /**
     * `true` if the moon is _always_ below the horizon
     */
    alwaysDown?: true;
}

/**
 * Sunlight times - get the solar event times at a location on earth for a given date
 * 
 * https://github.com/mourner/suncalc?tab=readme-ov-file#sunlight-times
 * 
 * @param date - Date
 * @param latitude - Latitude of the location
 * @param longitude - Longitude of the location
 * @param height - Optional height (elevation) above the spheroid of earth in meters
 */
export function getTimes(date: Date, latitude: number, longitude: number, height?: number): GetTimesResult;

/**
 * https://github.com/mourner/suncalc/blob/master/suncalc.js#L91-L104
 */
export function addTime(angleInDegrees: number, morningName: string, eveningName: string): void;

/**
 * Sun position - get the position (altitude and azimuth) of the sun from the perspective of an observer at a location on earth at a given date and time
 * 
 * https://github.com/mourner/suncalc?tab=readme-ov-file#sun-position
 * 
 * @param timeAndDate - Date
 * @param latitude - Latitude of the location
 * @param longitude - Longitude of the location
 */
export function getPosition(timeAndDate: Date, latitude: number, longitude: number): GetSunPositionResult;

/**
 * Moon position - get the position (altitude, azimuth, distance and parallacticAngle) of the moon from the perspective of an observer at a location on earth at a given date and time
 * 
 * https://github.com/mourner/suncalc?tab=readme-ov-file#moon-position
 * 
 * @param timeAndDate - Date
 * @param latitude - Latitude of the location
 * @param longitude - Longitude of the location
 */
export function getMoonPosition(timeAndDate: Date, latitude: number, longitude: number): GetMoonPositionResult;

/**
 * Moon illumination - get the illumination parameters of the moon (fraction, phase and angle) of the moon for a given date
 * 
 * https://github.com/mourner/suncalc?tab=readme-ov-file#moon-illumination
 * 
 * @param timeAndDate - Date (defaults to user system date and time)
 */
export function getMoonIllumination(timeAndDate?: Date): GetMoonIlluminationResult;

/**
 * Moon rise and set times - get the lunar event times at a location on earth for a given date
 * 
 * https://github.com/mourner/suncalc?tab=readme-ov-file#moon-rise-and-set-times
 * 
 * @param date - Date
 * @param latitude - Latitude of the location
 * @param longitude - Longitude of the location
 * @param inUTC - By default, it will search for moon rise and set during user system day (from 0 to 24 hours); if `inUTC` is set to true, it will instead search the specified date from 0 to 24 UTC hours
 */
export function getMoonTimes(date: Date, latitude: number, longitude: number, inUTC?: boolean): GetMoonTimesResult;
