import DateRangePicker from "./DateRangePicker";

export interface DatepickerOptionsFormat {
    toValue: (date: Date, format: object, locale: object) => Date | number;
    toDisplay: (date: Date, format: object, locale: object) => string;
}

export interface DatepickerOptionsShortcutKeysDefinition {
    key?: string;
    ctrlOrMetaKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    altKey?: boolean;
    shiftKey?: boolean;
}

export interface DatepickerOptionsShortcutKeys {
    show?: DatepickerOptionsShortcutKeysDefinition;
    hide?: null;
    toggle?: DatepickerOptionsShortcutKeysDefinition;
    prevButton?: DatepickerOptionsShortcutKeysDefinition;
    nextButton?: DatepickerOptionsShortcutKeysDefinition;
    viewSwitch?: DatepickerOptionsShortcutKeysDefinition;
    clearButton?: DatepickerOptionsShortcutKeysDefinition;
    todayButton?: DatepickerOptionsShortcutKeysDefinition;
    exitEditMode?: DatepickerOptionsShortcutKeysDefinition;
}

export type DatepickerOptionsOrientationVertical = "top" | "middle" | "bottom" | "auto";
export type DatepickerOptionsOrientationHorizontal = "left" | "center" | "right" | "auto";
export type DatepickerOptionsOrientation =
    | `${DatepickerOptionsOrientationVertical} ${DatepickerOptionsOrientationHorizontal}`
    | "auto";

export interface DatepickerOptions {
    autohide?: boolean;
    beforeShowDay?: (date: Date) => object | string | boolean;
    beforeShowDecade?: (date: Date) => object | string | boolean;
    beforeShowMonth?: (date: Date) => object | string | boolean;
    beforeShowYear?: (date: Date) => object | string | boolean;
    buttonClass?: string;
    calendarWeeks?: boolean;
    clearButton?: boolean;
    container?: string | HTMLElement;
    dateDelimiter?: string;
    datesDisabled?: string[];
    daysOfWeekDisabled?: number[];
    daysOfWeekHighlighted?: number[];
    defaultViewDate?: string | Date | number;
    enableOnReadonly?: boolean;
    format?: string | DatepickerOptionsFormat;
    language?: string;
    maxDate?: string | Date | number;
    maxNumberOfDates?: number;
    maxView?: number;
    minDate?: string | Date | number;
    nextArrow?: string;
    orientation?: DatepickerOptionsOrientation;
    pickLevel?: number;
    prevArrow?: string;
    shortcutKeys?: DatepickerOptionsShortcutKeys;
    showDaysOfWeek?: boolean;
    showOnClick?: boolean;
    showOnFocus?: boolean;
    startView?: number;
    title?: string;
    todayButton?: boolean;
    todayButtonMode?: number;
    todayHighlight?: boolean;
    updateOnBlur?: boolean;
    weekNumbers?: number | ((date: Date, weekStart: number) => number);
    weekStart?: number;
}

export default class Datepicker {
    constructor(element: HTMLElement, options?: DatepickerOptions, rangepicker?: DateRangePicker);
    element: HTMLElement;
    dates: any;
    config: DatepickerOptions;
    inputField: any;
    editMode: boolean;
    picker: any;

    static formatDate(date: Date | number, format: string, lang?: string): string;
    static parseDate(dateStr: string | Date | number, format: string, lang?: string): number;

    static get locales(): object;

    get active(): boolean;
    get pickerElement(): HTMLElement | undefined;

    setOptions(options: object): void;

    show(): void;

    hide(): void;

    destroy(): Datepicker;

    getDate(format?: string): Date | string | Date[] | string[];

    setDate(...args: any[]): void;

    update(options?: { clear: boolean; render: boolean }): void;

    getFocusedDate(format?: string): Date | string;

    setFocusedDate(viewDate?: Date | number | string, resetView?: boolean): void;

    refresh(target?: "picker" | "input", forceRender?: boolean): void;

    enterEditMode(): void;

    exitEditMode(options?: object): void;
}
