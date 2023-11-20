import moment = require("moment");

export = moment;

declare module "moment" {
    type IUnitOfTime = "iYear" | "iMonth";

    function iDaysInMonth(year: number, month: number): number;

    namespace iConvert {
        interface GregorianResult {
            gy: number;
            gm: number;
            gd: number;
        }

        interface HijriResult {
            hy: number;
            hm: number;
            hd: number;
        }

        function toHijri(gy: number, gm: number, gd: number): HijriResult;
        function toGregorian(hy: number, hm: number, hd: number): GregorianResult;
    }

    interface Moment {
        startOf(unit: IUnitOfTime): Moment;
        endOf(unit: IUnitOfTime): Moment;

        add(amount: string | number, unit: IUnitOfTime): Moment;
        subtract(amount: string | number, unit: IUnitOfTime): Moment;

        iYear(y: number): Moment;
        iYear(): number;
        iMonth(m: number | string): Moment;
        iMonth(): number;
        iDate(d: number): Moment;
        iDate(): number;
        iWeek(d: number): Moment;
        iWeek(): number;
        iWeekYear(d: number): Moment;
        iWeekYear(): number;
        iDayOfYear(d: number): Moment;
        iDayOfYear(): number;
        iDaysInMonth(): number;
    }
}
