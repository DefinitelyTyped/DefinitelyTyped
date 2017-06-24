// Type definitions for flatpickr 3.0
// Project: https://github.com/chmln/flatpickr
// Definitions by: James Birtles <https://github.com/UnwrittenFun>
//                 Rowell Heria <https://github.com/rowellx68>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function flatpickr(element: string | Element | HTMLElement, options?: Flatpickr.Options): Flatpickr;

declare class Flatpickr {
    constructor(element: string | Element | HTMLElement, options?: Flatpickr.Options);

    changeMonth(month: number, isOffset?: boolean): void;
    clear(): void;
    close(): void;
    destroy(): void;
    formatDate(date: Date, format: string): string;
    jumpToDate(date?: Flatpickr.DateString): void;
    open(): void;
    parseDate(date: string, format: string): Date;
    redraw(): void;
    set(option: string, value: any): void;
    setDate(date: Flatpickr.DateString | Flatpickr.DateString[], triggerChange?: boolean, dateFormat?: string): void;
    toggle(): void;
}

declare namespace Flatpickr {
    interface Options {
        altFormat?: string;
        altInput?: boolean;
        altInputClass?: string;
        allowInput?: boolean;
        clickOpens?: boolean;
        dateFormat?: string | null;
        defaultDate?: DateString | DateString[];
        defaultHour?: number;
        defaultMinute?: number;
        disable?: DateRange[];
        disableMobile?: boolean;
        enable?: DateRange[];
        enableTime?: boolean;
        enableSeconds?: boolean;
        hourIncrement?: number;
        inline?: boolean;
        maxDate?: DateString;
        minDate?: DateString;
        minuteIncrement?: number;
        mode?: Mode;
        nextArrow?: string;
        noCalendar?: boolean;
        onChange?: EventCallback | EventCallback[];
        onClose?: EventCallback | EventCallback[];
        onOpen?: EventCallback | EventCallback[];
        onReady?: EventCallback | EventCallback[];
        onMonthChange?: EventCallback | EventCallback[];
        onYearChange?: EventCallback | EventCallback[];
        onValueUpdate?: EventCallback | EventCallback[];
        onDayCreate?: EventCallback | EventCallback[];
        parseDate?(date: string): Date;
        prevArrow?: string;
        shorthandCurrentMonth?: boolean;
        static?: boolean;
        time_24hr?: boolean;
        utc?: boolean;
        weekNumbers?: boolean;
        wrap?: boolean;
    }

    type DateString = Date | string;
    type DateRange = DateString | { from: DateString, to: DateString } | ((date: Date) => boolean);
    type Mode = 'single' | 'multiple' | 'range';
    type EventCallback = (selectedDates: Date[], dateStr: string, instance: Flatpickr, elem: HTMLElement) => void;
}

export = Flatpickr;
