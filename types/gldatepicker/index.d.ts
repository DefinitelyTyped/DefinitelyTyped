/// <reference types="jquery"/>

interface GlDatePickerOffset {
    x: number;
    y: number;
}

interface GlDatePickerDate {
    date: Date;
    repeatMonth?: boolean | undefined;
    repeatYear?: boolean | undefined;
}

interface GlDatePickerDateRange {
    from: Date;
    to?: Date | undefined;
    repeatYear?: boolean | undefined;
}

interface GlDatePickerSpecialDate extends GlDatePickerDate {
    data?: any;
    cssClass?: string | undefined;
}

interface GlDatePickerOptions {
    cssName?: string | undefined;
    zIndex?: number | undefined;
    borderSize?: number | undefined;
    calendarOffset?: GlDatePickerOffset | undefined;
    showAlways?: boolean | undefined;
    hideOnClick?: boolean | undefined;
    allowMonthSelect?: boolean | undefined;
    allowYearSelect?: boolean | undefined;
    todayDate?: Date | undefined;
    selectedDate?: Date | undefined;
    prevArrow?: string | undefined;
    nextArrow?: string | undefined;
    selectableDates?: GlDatePickerDate[] | undefined;
    selectableDateRange?: GlDatePickerDateRange[] | undefined;
    specialDates?: GlDatePickerSpecialDate[] | undefined;
    selectableMonths?: number[] | undefined;
    selectableYears?: number[] | undefined;
    selectableDOW?: number[] | undefined;
    monthNames?: string[] | undefined;
    dowNames?: string[] | undefined;
    dowOffset?: number | undefined;
    onClick?: ((inputElement: JQuery, cell: JQuery, date: Date, data: any) => void) | undefined;
    onHover?: ((inputElement: JQuery, cell: JQuery, date: Date, data: any) => void) | undefined;
    onShow?: ((calendar: JQuery) => void) | undefined;
    onHide?: ((calendar: JQuery) => void) | undefined;
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
