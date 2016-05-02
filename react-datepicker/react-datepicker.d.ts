// Type definitions for react-datepicker v0.27.0
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>, Andrey Balokha <https://github.com/andrewBalekha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>

declare module "react-datepicker" {
    interface ReactDatePicker {
        className?: string;
        dateFormat?: string;
        dateFormatCalendar?: string;
        disabled?: boolean;
        endDate?: {};
        excludeDates?: any[];
        filterDate?();
        id?: string;
        includeDates?: any[];
        isClearable?: boolean;
        locale?: string;
        maxDate?: {};
        minDate?: {};
        name?: string;
        onBlur?();
        onChange();
        onChange(date?);
        onFocus?();
        placeholderText?: string;
        popoverAttachment?: string;
        popoverTargetAttachment?: string;
        popoverTargetOffset?: string;
        readOnly?: boolean;
        renderCalendarTo?: any;
        required?: boolean;
        selected?: {};
        showYearDropdown?: boolean;
        startDate?: {};
        tabIndex?: number;
        tetherConstraints?: any[];
        title?: string;
        todayButton?:  string;
    }
    let ReactDatePicker: __React.ClassicComponentClass<ReactDatePicker>;
    export = ReactDatePicker;
}