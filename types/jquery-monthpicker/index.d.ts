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

    MonthPicker(methodName: 'Clear'): void;
    MonthPicker(methodName: 'ClearAllCallbacks'): void; // tslint:disable-line:unified-signatures
    MonthPicker(methodName: 'Close'): void; // tslint:disable-line:unified-signatures
    MonthPicker(methodName: 'Disable'): void; // tslint:disable-line:unified-signatures
    MonthPicker(methodName: 'Enable'): void; // tslint:disable-line:unified-signatures
    MonthPicker(methodName: 'GetSelectedDate'): Date;
    MonthPicker(methodName: 'GetSelectedMonth'): number;
    MonthPicker(methodName: 'GetSelectedMonthYear'): string|null;
    MonthPicker(methodName: 'GetSelectedYear'): number; // tslint:disable-line:unified-signatures
    MonthPicker(methodName: 'Open'): void; // tslint:disable-line:unified-signatures
    MonthPicker(methodName: 'Toggle'): void; // tslint:disable-line:unified-signatures
    MonthPicker(methodName: 'Validate'): void; // tslint:disable-line:unified-signatures
}
