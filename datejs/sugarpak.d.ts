// Type definitions for DateJS - SugarPak Extensions
// Project: http://www.datejs.com/
// Definitions by: David Khristepher Santos <http://github.com/rupertavery>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/** SugarPak.js - Domain Specific Language -  Syntactical Sugar */
declare module sugarpak {

    export interface IAddOrientation {
        millisecond(): IDateJS;
        second(): IDateJS;
        minute(): IDateJS;
        hour(): IDateJS;
        day(): IDateJS;
        week(): IDateJS;
        month(): IDateJS;
        year(): IDateJS;

        milliseconds(): IDateJS;
        seconds(): IDateJS;
        minutes(): IDateJS;
        hours(): IDateJS;
        days(): IDateJS;
        weeks(): IDateJS;
        months(): IDateJS;
        years(): IDateJS;
    }

    export interface IOrientation extends IAddOrientation {
        monday(): IDateJS;
        tuesday(): IDateJS;
        wednesday(): IDateJS;
        thursday(): IDateJS;
        friday(): IDateJS;
        saturday(): IDateJS;
        sunday(): IDateJS;

        mon(): IDateJS;
        tue(): IDateJS;
        wed(): IDateJS;
        thu(): IDateJS;
        fri(): IDateJS;
        sat(): IDateJS;
        sun(): IDateJS;

        january(): IDateJS;
        february(): IDateJS;
        march(): IDateJS;
        april(): IDateJS;
        may(): IDateJS;
        june(): IDateJS;
        july(): IDateJS;
        august(): IDateJS;
        september(): IDateJS;
        october(): IDateJS;
        november(): IDateJS;
        december(): IDateJS;

        jan(): IDateJS;
        feb(): IDateJS;
        mar(): IDateJS;
        apr(): IDateJS;
        // may 
        jun(): IDateJS;
        jul(): IDateJS;
        aug(): IDateJS;
        sep(): IDateJS;
        oct(): IDateJS;
        nov(): IDateJS;
        dec(): IDateJS;
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

        day(date?: IDateJS): boolean;
        week(date?: IDateJS): boolean;
        month(date?: IDateJS): boolean;
        year(date?: IDateJS): boolean;


    }

    export interface IDatePartComparer {
        millisecond(date?: IDateJS): boolean;
        second(date?: IDateJS): boolean;
        minute(date?: IDateJS): boolean;
        hour(date?: IDateJS): boolean;
        day(date?: IDateJS): boolean;
        week(date?: IDateJS): boolean;
        month(date?: IDateJS): boolean;
        year(date?: IDateJS): boolean;
    }

    export interface IDateElementEvaluator {
        ago(): IDateJS;
        before(): IDateJS;
        fromNow(): IDateJS;
        after(): IDateJS;
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

interface IDateJS {
    add(n: number): sugarpak.IAddOrientation;
    at(time: string): IDateJS;
    at(time: sugarpak.ITimeLiteral): IDateJS;
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

interface IDateJSStatic {
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
    fromObject(date: sugarpak.IDateLiteral): IDateJS;

    next(): sugarpak.IOrientation;
    last(): sugarpak.IOrientation;
    prev(): sugarpak.IOrientation;
    previous(): sugarpak.IOrientation;

    january(): IDateJS;
    february(): IDateJS;
    march(): IDateJS;
    april(): IDateJS;
    may(): IDateJS;
    june(): IDateJS;
    july(): IDateJS;
    august(): IDateJS;
    september(): IDateJS;
    october(): IDateJS;
    november(): IDateJS;
    december(): IDateJS;

    monday(): IDateJS;
    tuesday(): IDateJS;
    wednesday(): IDateJS;
    thursday(): IDateJS;
    friday(): IDateJS;
    saturday(): IDateJS;
    sunday(): IDateJS;

    mon(): IDateJS;
    tue(): IDateJS;
    wed(): IDateJS;
    thu(): IDateJS;
    fri(): IDateJS;
    sat(): IDateJS;
    sun(): IDateJS;

    jan(): IDateJS;
    feb(): IDateJS;
    mar(): IDateJS;
    apr(): IDateJS;
    // may 
    jun(): IDateJS;
    jul(): IDateJS;
    aug(): IDateJS;
    sep(): IDateJS;
    oct(): IDateJS;
    nov(): IDateJS;
    dec(): IDateJS;

}

interface Number extends sugarpak.IDateElement {
    // extend the Number type with all the IDateJS goodness
}