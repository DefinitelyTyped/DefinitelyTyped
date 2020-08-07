export class SfDate {
    static parseDate(str: string): Date;
    static toDateLiteral(date: Date | string | number): SfDate;
    static toDateTimeLiteral(date: Date | string | number): SfDate;
}
