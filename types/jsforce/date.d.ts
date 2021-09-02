export class SfDate {
    constructor(str: string): SfDate;
    static parseDate(str: string): Date;
    static toDateLiteral(date: Date | string | number): SfDate;
    static toDateTimeLiteral(date: Date | string | number): SfDate;
}
