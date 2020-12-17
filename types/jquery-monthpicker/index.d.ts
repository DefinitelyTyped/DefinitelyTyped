// Type definitions for non-npm package jquery-monthPicker 3.0
// Project: <https://github.com/KidSysco/jquery-ui-month-picker>
// Definitions by: doberkofler <https://github.com/doberkofler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="jquery"/>
/// <reference types="jqueryui"/>

interface JQueryMonthPickerOptions {
    AltField?: string|JQuery|Element;
    AltFormat?: string;
    Animation?: string;
    Button?: string|JQuery|Element;
    ButtonIcon?: string;
    Disabled?: boolean;
    Duration?: number|string;
    HideAnim?: 'fadeOut'|'slideUp'|'none';
    IsRTL?: boolean;
    MaxMonth?: Date|number|string;
    MinMonth?: Date|number|string;
    MonthFormat?: string;
    Position?: any;
    SelectedMonth?: Date|number|string;
    ShowAnim?: string;
    ShowIcon?: boolean;
    ShowOn?: string;
    StartYear?: number|null;
    UseInputMask?: boolean;
    ValidationErrorMessage?: string|null;
    i18n?: {
        year?: string;
        prevYear?: string;
        nextYear?: string;
        next12Years?: string;
        prev12Years?: string;
        nextLabel?: string;
        prevLabel?: string;
        buttonText?: string;
        jumpYears?: string;
        backTo?: string;
        months?: string[];
    };
    OnBeforeMenuClose?: () => void;
    OnBeforeMenuOpen?: () => void;
    OnAfterMenuClose?: () => void;
    OnAfterMenuOpen?: () => void;
}

interface JQuery {
    MonthPicker(options: JQueryMonthPickerOptions): JQuery;

    /** Clears the state of all input and validation warnings. */
    MonthPicker(methodName: 'Clear'): void;

    /** Disables all previously assigned event callbacks listed in the Events tab. */
    MonthPicker(methodName: 'ClearAllCallbacks'): void; // tslint:disable-line:unified-signatures

    /** Closes the month picker if it's already open. */
    MonthPicker(methodName: 'Close'): void; // tslint:disable-line:unified-signatures

    /** Disables the MonthPicker and its associated elements. */
    MonthPicker(methodName: 'Disable'): void; // tslint:disable-line:unified-signatures

    /** Enables the MonthPicker and its associated elements. */
    MonthPicker(methodName: 'Enable'): void; // tslint:disable-line:unified-signatures

    /** Returns the selected month as a Date object. */
    MonthPicker(methodName: 'GetSelectedDate'): Date;

    /** Validates the selected month/year and returns the selected value as a string (for example '1/2015') if it is a valid date. */
    MonthPicker(methodName: 'GetSelectedMonthYear'): string|null;

    /** Returns only the month portion of the selected date as an integer. Returns NaN if there is no valid date. */
    MonthPicker(methodName: 'GetSelectedMonth'): number;

    /** Returns only the year portion of the selected date as an integer. Returns NaN if there is no valid date. */
    MonthPicker(methodName: 'GetSelectedYear'): number; // tslint:disable-line:unified-signatures

    /** Opens the month picker menu and keeps it open if it's already open, see the OnBeforeMenuClose event to prevent the menu from closing on click (or other) events. */
    MonthPicker(methodName: 'Open'): void; // tslint:disable-line:unified-signatures

    /** Opens the month picker menu or closes the menu if it's already open, see the OnBeforeMenuClose event to prevent the menu from closing on click (or other) events.  */
    MonthPicker(methodName: 'Toggle'): void; // tslint:disable-line:unified-signatures

    /** Validates the selected month/year and returns the selected value as a Date object if it is a valid date. */
    MonthPicker(methodName: 'Validate'): void; // tslint:disable-line:unified-signatures
}
