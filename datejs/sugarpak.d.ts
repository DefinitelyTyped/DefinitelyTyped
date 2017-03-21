// Type definitions for DateJS - SugarPak Extensions
// Project: http://www.datejs.com/
// Definitions by: David Khristepher Santos <http://github.com/rupertavery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** SugarPak.js - Domain Specific Language -  Syntactical Sugar */
declare namespace sugarpak {

    export interface IAddOrientation {
        millisecond(): Date;
        second(): Date;
        minute(): Date;
        hour(): Date;
        day(): Date;
        week(): Date;
        month(): Date;
        year(): Date;

        milliseconds(): Date;
        seconds(): Date;
        minutes(): Date;
        hours(): Date;
        days(): Date;
        weeks(): Date;
        months(): Date;
        years(): Date;
    }

    export interface IOrientation extends IAddOrientation {
        monday(): Date;
        tuesday(): Date;
        wednesday(): Date;
        thursday(): Date;
        friday(): Date;
        saturday(): Date;
        sunday(): Date;

        mon(): Date;
        tue(): Date;
        wed(): Date;
        thu(): Date;
        fri(): Date;
        sat(): Date;
        sun(): Date;

        january(): Date;
        february(): Date;
        march(): Date;
        april(): Date;
        may(): Date;
        june(): Date;
        july(): Date;
        august(): Date;
        september(): Date;
        october(): Date;
        november(): Date;
        december(): Date;

        jan(): Date;
        feb(): Date;
        mar(): Date;
        apr(): Date;
        // may
        jun(): Date;
        jul(): Date;
        aug(): Date;
        sep(): Date;
        oct(): Date;
        nov(): Date;
        dec(): Date;
    }

    export interface IPredicate {
        today(): boolean;

        monday(): boolean;
        tuesday(): boolean;
        wednesday(): boolean;
        thursday(): boolean;
        friday(): boolean;
        saturday(): boolean;
        sunday(): boolean;

        mon(): boolean;
        tue(): boolean;
        wed(): boolean;
        thu(): boolean;
        fri(): boolean;
        sat(): boolean;
        sun(): boolean;

        january(): boolean;
        february(): boolean;
        march(): boolean;
        april(): boolean;
        may(): boolean;
        june(): boolean;
        july(): boolean;
        august(): boolean;
        september(): boolean;
        october(): boolean;
        november(): boolean;
        december(): boolean;

        jan(): boolean;
        feb(): boolean;
        mar(): boolean;
        apr(): boolean;
        jun(): boolean;
        jul(): boolean;
        aug(): boolean;
        sep(): boolean;
        oct(): boolean;
        nov(): boolean;
        dec(): boolean;

        weekday(): boolean;

        day(date?: Date): boolean;
        week(date?: Date): boolean;
        month(date?: Date): boolean;
        year(date?: Date): boolean;


    }

    export interface IDatePartComparer {
        millisecond(date?: Date): boolean;
        second(date?: Date): boolean;
        minute(date?: Date): boolean;
        hour(date?: Date): boolean;
        day(date?: Date): boolean;
        week(date?: Date): boolean;
        month(date?: Date): boolean;
        year(date?: Date): boolean;
    }

    export interface IDateElementEvaluator {
        ago(): Date;
        before(): Date;
        fromNow(): Date;
        after(): Date;
    }

    export interface IDateElement {
        millisecond(): IDateElementEvaluator;
        second(): IDateElementEvaluator;
        minute(): IDateElementEvaluator;
        hour(): IDateElementEvaluator;
        day(): IDateElementEvaluator;
        week(): IDateElementEvaluator;
        month(): IDateElementEvaluator;
        year(): IDateElementEvaluator;

        milliseconds(): IDateElementEvaluator;
        seconds(): IDateElementEvaluator;
        minutes(): IDateElementEvaluator;
        hours(): IDateElementEvaluator;
        days(): IDateElementEvaluator;
        weeks(): IDateElementEvaluator;
        months(): IDateElementEvaluator;
        years(): IDateElementEvaluator;
    }

    export interface IDateLiteral extends ITimeLiteral {
        day: number;
        week: number;
        month: number;
        year: number;
    }

    export interface ITimeLiteral {
        millisecond: number;
        second: number;
        minute: number;
        hour: number;
    }

}

interface Date {
    add(n: number): sugarpak.IAddOrientation;
    at(time: string): Date;
    at(time: sugarpak.ITimeLiteral): Date;
    is(): sugarpak.IPredicate;
    next(): sugarpak.IOrientation;
    last(): sugarpak.IOrientation;
    prev(): sugarpak.IOrientation;
    final(): sugarpak.IOrientation;
    first(): sugarpak.IOrientation;
    second(): sugarpak.IOrientation;
    third(): sugarpak.IOrientation;
    fourth(): sugarpak.IOrientation;
    fifth(): sugarpak.IOrientation;
    previous(): sugarpak.IOrientation;
    /**  Determines if two date objects occur on/in exactly the same instance of the subsequent date part function. Must be followed by a date part function (example: .day(), .month(), .year(), etc) */
    same(): sugarpak.IDatePartComparer;
    /** Returns a date literal from a DateJS instance */
    toObject(): sugarpak.IDateLiteral;
}

interface DateConstructor {
    /** Contains the day-of-week value for Monday */
    MONDAY: number;
    /** Contains the day-of-week value for Tuesday */
    TUESDAY: number;
    /** Contains the day-of-week value for Wednesday */
    WEDNESDAY: number;
    /** Contains the day-of-week value for Thursday */
    THURSDAY: number;
    /** Contains the day-of-week value for Friday */
    FRIDAY: number;
    /** Contains the day-of-week value for Saturday */
    SATURDAY: number;
    /** Contains the day-of-week value for Sunday */
    SUNDAY: number;
    /** Instantiates a DateJS object from a literal */
    fromObject(date: sugarpak.IDateLiteral): Date;

    next(): sugarpak.IOrientation;
    last(): sugarpak.IOrientation;
    prev(): sugarpak.IOrientation;
    previous(): sugarpak.IOrientation;

    january(): Date;
    february(): Date;
    march(): Date;
    april(): Date;
    may(): Date;
    june(): Date;
    july(): Date;
    august(): Date;
    september(): Date;
    october(): Date;
    november(): Date;
    december(): Date;

    monday(): Date;
    tuesday(): Date;
    wednesday(): Date;
    thursday(): Date;
    friday(): Date;
    saturday(): Date;
    sunday(): Date;

    mon(): Date;
    tue(): Date;
    wed(): Date;
    thu(): Date;
    fri(): Date;
    sat(): Date;
    sun(): Date;

    jan(): Date;
    feb(): Date;
    mar(): Date;
    apr(): Date;
    // may
    jun(): Date;
    jul(): Date;
    aug(): Date;
    sep(): Date;
    oct(): Date;
    nov(): Date;
    dec(): Date;

}

interface Number extends sugarpak.IDateElement {
    // extend the Number type with all the Date goodness
}
