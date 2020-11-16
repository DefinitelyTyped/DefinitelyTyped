declare class FlorealDate {
    constructor(value?: number | string);

    toFullDateString(): string;
    toShortDateString(): string;

    setYear(year: string): void;
    setYearDecimal(year: number): void;
    setMonth(month: number): void;
    setDay(day: number): void;
    setDate(year: number, month: number, day: number): void;

    year(): string;
    yearDecimal(): number;
    isYearSextile(): boolean;
    firstDayOfYear(): Date;
    dayOfYear(): number;
    month(): number;
    isComplementaryDay(): boolean;
    monthName(): string;
    dayOfMonth(): number;
    day(): number;
    dayOfDecade(): number;
    dayOfWeek(): number;
    decade(): number;
    dayName(): string;
    dayTitle(): string;

    static day_names: string[];

    static first_day_of_year(year: any): any;
}

export = FlorealDate;
