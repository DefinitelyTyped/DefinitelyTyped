// Type definitions for adhan-js 3.0
// Project: https://github.com/batoulapps/adhan-js
// Definitions by: Ikramullah <https://github.com/skymunn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Start declare module
// declare module 'adhan' { export = Adhan }
declare namespace Adhan {
  class PrayerTimes {
    constructor(coordinates: number, date: Date, params: Paramater);

    fajr: Date;
    sunrise: Date;
    dhuhr: Date;
    asr: Date;
    maghrib: Date;
    isha: Date;
  }

  function Coordinates(longitude: number, latitude: number): number;

  let CalculationMethod: AdhanCalculationMethod;

  enum Madhab {
    Hanafi, Shafi
  }

  enum HighLatitudeRule {
    MiddleOfTheNight, SeventhOfTheNight, TwilightAngle
  }

  let Date: AdhanDate;

  let Math: AdhanMath;
}

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
  madhab: Adhan.Madhab;
  highLatitudeRule: Adhan.HighLatitudeRule;
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

// Start Type
type TimeMode = '12h' | '24h';
