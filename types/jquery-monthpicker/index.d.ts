/// <reference types="jquery"/>
/// <reference types="jqueryui"/>

interface JQueryMonthPickerOptions {
    AltField?: string | JQuery | Element | undefined;
    AltFormat?: string | undefined;
    Animation?: string | undefined;
    Button?: string | JQuery | Element | undefined;
    ButtonIcon?: string | undefined;
    Disabled?: boolean | undefined;
    Duration?: number | string | undefined;
    HideAnim?: "fadeOut" | "slideUp" | "none" | undefined;
    IsRTL?: boolean | undefined;
    MaxMonth?: Date | number | string | undefined;
    MinMonth?: Date | number | string | undefined;
    MonthFormat?: string | undefined;
    Position?: any;
    SelectedMonth?: Date | number | string | undefined;
    ShowAnim?: string | undefined;
    ShowIcon?: boolean | undefined;
    ShowOn?: string | undefined;
    StartYear?: number | null | undefined;
    UseInputMask?: boolean | undefined;
    ValidationErrorMessage?: string | null | undefined;
    i18n?: {
        year?: string | undefined;
        prevYear?: string | undefined;
        nextYear?: string | undefined;
        next12Years?: string | undefined;
        prev12Years?: string | undefined;
        nextLabel?: string | undefined;
        prevLabel?: string | undefined;
        buttonText?: string | undefined;
        jumpYears?: string | undefined;
        backTo?: string | undefined;
        months?: string[] | undefined;
    } | undefined;
    OnBeforeMenuClose?: (() => void) | undefined;
    OnBeforeMenuOpen?: (() => void) | undefined;
    OnAfterMenuClose?: (() => void) | undefined;
    OnAfterMenuOpen?: (() => void) | undefined;
}

interface JQuery {
    MonthPicker(options: JQueryMonthPickerOptions): JQuery;

    /** Clears the state of all input and validation warnings. */
    MonthPicker(methodName: "Clear"): void;

    /** Disables all previously assigned event callbacks listed in the Events tab. */
    MonthPicker(methodName: "ClearAllCallbacks"): void; // tslint:disable-line:unified-signatures

    /** Closes the month picker if it's already open. */
    MonthPicker(methodName: "Close"): void; // tslint:disable-line:unified-signatures

    /** Disables the MonthPicker and its associated elements. */
    MonthPicker(methodName: "Disable"): void; // tslint:disable-line:unified-signatures

    /** Enables the MonthPicker and its associated elements. */
    MonthPicker(methodName: "Enable"): void; // tslint:disable-line:unified-signatures

    /** Returns the selected month as a Date object. */
    MonthPicker(methodName: "GetSelectedDate"): Date;

    /** Validates the selected month/year and returns the selected value as a string (for example '1/2015') if it is a valid date. */
    MonthPicker(methodName: "GetSelectedMonthYear"): string | null;

    /** Returns only the month portion of the selected date as an integer. Returns NaN if there is no valid date. */
    MonthPicker(methodName: "GetSelectedMonth"): number;

    /** Returns only the year portion of the selected date as an integer. Returns NaN if there is no valid date. */
    MonthPicker(methodName: "GetSelectedYear"): number; // tslint:disable-line:unified-signatures

    /** Opens the month picker menu and keeps it open if it's already open, see the OnBeforeMenuClose event to prevent the menu from closing on click (or other) events. */
    MonthPicker(methodName: "Open"): void; // tslint:disable-line:unified-signatures

    /** Opens the month picker menu or closes the menu if it's already open, see the OnBeforeMenuClose event to prevent the menu from closing on click (or other) events.  */
    MonthPicker(methodName: "Toggle"): void; // tslint:disable-line:unified-signatures

    /** Validates the selected month/year and returns the selected value as a Date object if it is a valid date. */
    MonthPicker(methodName: "Validate"): void; // tslint:disable-line:unified-signatures
}
