// Type definitions for pikaday
// Project: https://github.com/dbushell/Pikaday
// Definitions by: Rudolph Gottesheim <http://midnight-design.at/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../moment/moment.d.ts" />

interface PikadayI18nConfig {
    previousMonth: string;
    nextMonth: string;
    months: string[];
    weekdays: string[];
    weekdaysShort: string[];
}

interface PikadayOptions {
    field?: HTMLElement;
    format?: string;
    trigger?: HTMLElement;
    bound?: boolean;
    position?: string;
    reposition?: boolean;
    container?: HTMLElement;
    defaultDate?: Date;
    setDefaultDate?: boolean;
    firstDay?: number;
    minDate?: Date;
    maxDate?: Date;
    disableWeekends?: boolean;
    disableDayFn?: (date:Date) => boolean;
    yearRange?: number[];
    showWeekNumber?: boolean;
    isRTL?: boolean;
    i18n?: PikadayI18nConfig;
    yearSuffix?: string;
    showMonthAfterYear?: boolean;
    numberOfMonths?: number;
    mainCalendar?: string;
    theme?: string;
    onSelect?: (date:Date) => void;
    onOpen?: () => void;
    onClose?: () => void;
    onDraw?: () => void;
}

declare class Pikaday {
    el:HTMLElement;

    constructor(options:PikadayOptions);

    toString():string;
    toString(format:string):string;

    getDate():Date|void;

    setDate(date:string|Date, triggerOnSelect?:boolean):void;

    getMoment():moment.Moment;

    setMoment(moment:any):void;

    gotoDate(date:Date):void;

    gotoToday():void;

    gotoMonth(monthIndex:number):void;

    gotoYear(year:number):void;

    nextMonth():void;

    prevMonth():void;

    gogoYear(year:number):void;

    setMinDate(date:Date):void;

    setMaxDate(date:Date):void;

    isVisible():boolean;

    show():void;

    hide():void;

    adjustPosition():void;

    destroy():void;
}
