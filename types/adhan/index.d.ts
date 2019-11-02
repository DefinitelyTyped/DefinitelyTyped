// Type definitions for adhan-js 3.0
// Project: https://github.com/batoulapps/adhan-js
// Definitions by: Ikramullah <https://github.com/skymunn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// UMD Module
export as namespace adhan;

// Declare method/property
export class PrayerTimes {
  constructor(coordinates: Coordinates, date: Date, params: Paramater);

  fajr: Date;
  sunrise: Date;
  dhuhr: Date;
  asr: Date;
  maghrib: Date;
  isha: Date;
}

export class Coordinates {
  constructor(longitude: number, latitude: number);
  longitude: number;
  latitude: number;
}

export const CalculationMethod: AdhanCalculationMethod;

export enum Madhab {
  Hanafi, Shafi
}

export enum HighLatitudeRule {
  MiddleOfTheNight, SeventhOfTheNight, TwilightAngle
}

export const Date: AdhanDate;

export const Math: AdhanMath;

// Declare Interface privately
interface AdhanCalculationMethod {
  Dubai(): Paramater;
  Egyptian(): Paramater;
  Karachi(): Paramater;
  Kuwait(): Paramater;
  MoonsightingCommittee(): Paramater;
  MuslimWorldLeague(): Paramater;
  NorthAmerica(): Paramater;
  Other(): Paramater;
  Qatar(): Paramater;
  Singapore(): Paramater;
  UmmAlQura(): Paramater;
}

interface Paramater {
  readonly method: string;
  fajrAngle: number;
  ishaAngle: number;
  ishaInterval: number;
  madhab: Madhab;
  highLatitudeRule: HighLatitudeRule;
  adjustments: {
    fajr: number;
    sunrise: number;
    dhuhr: number;
    asr: number;
    maghrib: number;
    isha: number;
  };
}

interface AdhanDate {
  formattedTime(prayerTime: Date, offset?: number, style?: TimeMode): string;
  dateByAddingDays(date: Date, days: number): string;
  dateByAddingHours(date: Date, hours: number): string;
  dateByAddingMinutes(date: Date, minutes: number): string;
  dateByAddingSeconds(date: Date, seconds: number): string;
  dayOfYear(date: Date): string;
  julianDate(date: Date): string;
  roundedMinute(date: Date): string;
}

interface AdhanMath {
  degreesToRadians(degrees: number): number;
  normalizeToScale(number: number, max: number): number;
  quadrantShiftAngle(angle: number): number;
  radiansToDegrees(radians: number): number;
  timeComponents(number: number): number;
  unwindAngle(angle: number): number;
}

// Declare type
type TimeMode = '12h' | '24h';
