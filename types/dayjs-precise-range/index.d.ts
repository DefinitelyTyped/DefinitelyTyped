import dayjs = require("dayjs");

export as namespace preciseDiff;
export = dayjs;

declare module "dayjs" {
    interface PreciseRangeValueObject {
        years: number;
        months: number;
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        firstDateWasLater: boolean;
    }

    interface Dayjs {
        preciseDiff(d2: Dayjs, returnValueObject?: false): string;
        preciseDiff(d2: Dayjs, returnValueObject: true): PreciseRangeValueObject;
    }

    function preciseDiff(d1: Dayjs, d2: Dayjs, returnValueObject?: false): string;
    function preciseDiff(d1: Dayjs, d2: Dayjs, returnValueObject: true): PreciseRangeValueObject;
}
