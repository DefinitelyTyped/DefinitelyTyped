/// <reference types="jquery" />

declare namespace FoundationDatepicker {
    interface Event extends JQuery.Event {
        date: Date;
    }

    interface OutOfRangeEvent extends Event {
        startDate: Date;
        endDate: Date;
    }

    interface Settings {
        appendTo?: JQuery.Selector | JQuery.htmlString | JQuery.TypeOrArray<Element | DocumentFragment> | JQuery;
        autoShow?: boolean;
        autoclose?: boolean;
        calendarWeeks?: boolean;
        closeButton?: boolean;
        closeIcon?: string;
        datesDisabled?: string[];
        daysOfWeekDisabled?: number[];
        disableDblClickSelection?: boolean;
        endDate?: Date;
        faCSSprefix?: string;
        forceParse?: boolean;
        format?: string;
        initialDate?: string;
        keyboardNavigation?: boolean;
        language?: string;
        leftArrow?: string;
        maxView?: "decade" | "year" | "month" | "day" | "hour" | number;
        minView?: "decade" | "year" | "month" | "day" | "hour" | number;
        minuteStep?: number;
        nonMilitaryTime?: boolean;
        onRender?: (date: Date) => string;
        pickTime?: boolean;
        rightArrow?: string;
        startDate?: Date;
        startView?: "decade" | "year" | "month" | "day" | "hour" | number;
        todayBtn?: boolean;
        todayHighlight?: boolean;
        weekStart?: number;
    }
}

interface JQuery<TElement = HTMLElement> {
    fdatepicker(option?: FoundationDatepicker.Settings | "show" | "hide" | "place"): JQuery;
    fdatepicker(option: "update", value: string | Date): JQuery;
    on(events: "show" | "hide" | "changeDate", handler: (eventObject: FoundationDatepicker.Event) => void): JQuery;
    on(events: "outOfRange", handler: (eventObject: FoundationDatepicker.OutOfRangeEvent) => void): JQuery;
}
