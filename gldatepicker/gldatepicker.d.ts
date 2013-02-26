// Type definitions for glDatePicker 2.0
// Project: http://glad.github.com/glDatePicker/
// Definitions by: Dániel Tar https://github.com/qcz
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface GlDatePickerOffset {
    x: number;
    y: number;
}

interface GlDatePickerDate {
    date: Date;
    repeatMonth?: bool;
    repeatYear?: bool;
}

interface GlDatePickerDateRange {
    from: Date;
    to?: Date;
    repeatYear?: bool;
}

interface GlDatePickerSpecialDate extends GlDatePickerDate {
    data?: any;
    cssClass?: string;
}

interface GlDatePickerOptions {
    cssName?: string;
    zIndex?: number;
    borderSize?: number;
    calendarOffset?: GlDatePickerOffset;
    showAlways?: bool;
    hideOnClick?: bool;
    allowMonthSelect?: bool;
    allowYearSelect?: bool;
    todayDate?: Date;
    selectedDate?: Date;
    prevArrow?: string;
    nextArrow?: string;
    selectableDates?: GlDatePickerDate[];
    selectableDateRange?: GlDatePickerDateRange[];
    specialDates?: GlDatePickerSpecialDate[];
    selectableMonths?: number[];
    selectableYears?: number[];
    selectableDOW?: number[];
    monthNames?: string[];
    dowNames?: string[];
    dowOffset?: number;
    onClick?: (inputElement: JQuery, cell: JQuery, date: Date, data: any) => void;
    onHover?: (inputElement: JQuery, cell: JQuery, date: Date, data: any) => void;
    onShow?: (calendar: JQuery) => void;
    onHide?: (calendar: JQuery) => void;
}

interface GlDatePicker {
    options: GlDatePickerOptions;

    show(): void;
    hide(): void;
    render(renderCallback?: () => void): void;
}

interface JQuery {
    glDatePicker(options?: GlDatePickerOptions): JQuery;
    glDatePicker(ret: bool): GlDatePicker;
}