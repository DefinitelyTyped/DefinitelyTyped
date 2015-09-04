// Type definitions for glDatePicker 2.0
// Project: http://glad.github.com/glDatePicker/
// Definitions by: Dániel Tar <https://github.com/qcz>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface GlDatePickerOffset {
    x: number;
    y: number;
}

interface GlDatePickerDate {
    date: Date;
    repeatMonth?: boolean;
    repeatYear?: boolean;
}

interface GlDatePickerDateRange {
    from: Date;
    to?: Date;
    repeatYear?: boolean;
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
    showAlways?: boolean;
    hideOnClick?: boolean;
    allowMonthSelect?: boolean;
    allowYearSelect?: boolean;
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
	glDatePicker(ret: boolean): GlDatePicker;
	glDatePicker(options?: GlDatePickerOptions): JQuery;
}
