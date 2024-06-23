export class SfDate {
    constructor(str: string);
    static parseDate(str: string): Date;
    static toDateLiteral(date: Date | string | number): SfDate;
    static toDateTimeLiteral(date: Date | string | number): SfDate;
}
