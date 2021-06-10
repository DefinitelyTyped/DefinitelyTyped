import { Control } from './Control';

export interface DateTime {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
}

export class DateTimeControl extends Control {
    parseDateTime(datetime: string): DateTime | null;
    validateInputs(): boolean;
    updateDaysForMonth(): void;
    populateSetting(): boolean;
    convertInputDateToString(): string;
    isFutureDate(): boolean;
    convertHourToTwentyFourHourFormat(hourInTwelveHourFormat: string, meridian: 'am' | 'pm'): string;
    populateDateInputs(): boolean;
    toggleFutureDateNotification(notify: boolean): DateTimeControl;
}
