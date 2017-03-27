// Type definitions for react-datepicker v0.40.0
// Project: https://github.com/Hacker0x01/react-datepicker
// Definitions by: Rajab Shakirov <https://github.com/radziksh>, Andrey Balokha <https://github.com/andrewBalekha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare module "react-datepicker" {
    import * as React from "react";
    import * as moment from "moment";

    interface ReactDatePickerProps {
        autoComplete?: string;
        autoFocus?: boolean;
        className?: string;
        customInput?: React.ReactNode;
        dateFormat?: string;
        dateFormatCalendar?: string;
        disabled?: boolean;
        endDate?: moment.Moment;
        excludeDates?: any[];
        filterDate?(): any;
        fixedHeight?: boolean;
        id?: string;
        includeDates?: any[];
        isClearable?: boolean;
        locale?: string;
        maxDate?: moment.Moment;
        minDate?: moment.Moment;
        name?: string;
        onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
        onChange(date: moment.Moment | null, event: React.SyntheticEvent<any> | undefined): any;
        onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
        onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
        peekNextMonth?: boolean;
        placeholderText?: string;
        popoverAttachment?: string;
        popoverTargetAttachment?: string;
        popoverTargetOffset?: string;
        readOnly?: boolean;
        renderCalendarTo?: any;
        required?: boolean;
        scrollableYearDropdown?: boolean;
        selected?: moment.Moment | null;
        selectsEnd?: boolean;
        selectsStart?: boolean;
        showMonthDropdown?: boolean;
        showYearDropdown?: boolean;
        showWeekNumbers?: boolean;
        startDate?: moment.Moment;
        tabIndex?: number;
        tetherConstraints?: any[];
        title?: string;
        todayButton?: string;
        utcOffset?: number;
    }
    let ReactDatePicker: React.ClassicComponentClass<ReactDatePickerProps>;
    export = ReactDatePicker;
}
