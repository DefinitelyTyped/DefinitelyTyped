// Type definitions for react-datepicker v0.28.1
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>, Andrey Balokha <https://github.com/andrewBalekha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react"/>

declare module "react-datepicker" {
    interface ReactDatePickerProps {
        autoComplete?: string;
        autoFocus?: boolean;
        className?: string;
        customInput?: React.ReactNode;
        dateFormat?: string;
        dateFormatCalendar?: string;
        disabled?: boolean;
        endDate?: {};
        excludeDates?: any[];
        filterDate?(): any;
        fixedHeight?: boolean;
        id?: string;
        includeDates?: any[];
        isClearable?: boolean;
        locale?: string;
        maxDate?: {};
        minDate?: {};
        name?: string;
        onBlur?(e: any): void;
        onChange(date?: any, e?: any): void;
        onFocus?(e: any): void;
        peekNextMonth?: boolean;
        placeholderText?: string;
        popoverAttachment?: string;
        popoverTargetAttachment?: string;
        popoverTargetOffset?: string;
        readOnly?: boolean;
        renderCalendarTo?: any;
        required?: boolean;
        scrollableYearDropdown?: boolean;
        selected?: {};
        selectsEnd?: boolean;
        selectsStart?: boolean;
        showMonthDropdown?: boolean;
        showYearDropdown?: boolean;
        showWeekNumbers?: boolean;
        startDate?: {};
        tabIndex?: number;
        tetherConstraints?: any[];
        title?: string;
        todayButton?: string;
        utcOffset?: number;
    }
    let ReactDatePicker: React.ClassicComponentClass<ReactDatePickerProps>;
    export = ReactDatePicker;
}
