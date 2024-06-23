import { DateTime } from "luxon";

export type BusinessDayNumbers = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type BusinessDays = BusinessDayNumbers[];

export type HolidayMatcher = (inst: DateTime<boolean>) => boolean;
export interface HolidayMatchersDict {
    [key: string]: HolidayMatcher;
}

export type HolidayHelper = (...args: any[]) => any;
export interface HolidayHelpersDict {
    [key: string]: HolidayHelper;
}

declare module "luxon" {
    interface DateTime<IsValid extends boolean> {
        businessDays?: BusinessDays;
        holidayMatchers?: HolidayMatcher[];
        availableHolidayHelpers: HolidayHelpersDict;
        availableHolidayMatchers: HolidayMatchersDict;

        setupBusiness(opts?: {
            businessDays?: BusinessDays;
            holidayMatchers?: HolidayMatcher[];
        }): void;

        clearBusinessSetup(): void;

        isHoliday(...args: any[]): boolean;

        isBusinessDay(): boolean;

        plusBusiness(opts?: { days?: number }): this;

        minusBusiness(opts?: { days?: number }): this;
    }
}

export { DateTime };
