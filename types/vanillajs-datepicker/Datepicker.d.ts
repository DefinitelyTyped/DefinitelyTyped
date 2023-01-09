import DateRangePicker from './DateRangePicker';

export interface DatepickerOptionsFormat {
    toValue: (date: Date, format: object, locale: object) => string;
    toDisplay: (date: Date, format: object, locale: object) => string;
}

export type DatepickerOptionsOrientationVertical = 'top' | 'middle' | 'bottom' | 'auto';
export type DatepickerOptionsOrientationHorizontal = 'left' | 'center' | 'right' | 'auto';
export type DatepickerOptionsOrientation =
    | `${DatepickerOptionsOrientationVertical} ${DatepickerOptionsOrientationHorizontal}`
    | 'auto';

export interface DatepickerOptions {
    autohide?: boolean;
    beforeShowDay?: (date: Date) => object | string | boolean;
    beforeShowDecade?: (date: Date) => object | string | boolean;
    beforeShowMonth?: (date: Date) => object | string | boolean;
    beforeShowYear?: (date: Date) => object | string | boolean;
    buttonClass?: string;
    calendarWeeks?: boolean;
    clearBtn?: boolean;
    container?: string | HTMLElement;
    dateDelimiter?: string;
    datesDisabled?: string[];
    daysOfWeekDisabled?: number[];
    daysOfWeekHighlighted?: number[];
    defaultViewDate?: string | Date | number ;
    format?: string | DatepickerOptionsFormat ;
    language?: string;
    maxDate?: string | Date | number;
    maxNumberOfDates?: number;
    maxView?: number;
    minDate?: string | Date | number;
    nextArrow?: string;
    prevArrow?: string;
    orientation?: DatepickerOptionsOrientation;
    pickLevel?: number;
    prevArray?: string;
    showDaysOfWeek?: boolean;
    showOnClick?: boolean;
    showOnFocus?: boolean;
    startView?: number;
    title?: string;
    todayBtn?: boolean;
    todayBtnMode?: number;
    todayHighlight?: boolean;
    updateOnBlur?: boolean;
    weekStart?: number;
}

export default class Datepicker {
    static formatDate(date: Date | number, format: string, lang?: string): string;
    static parseDate(dateStr: string | Date | number, format: string, lang?: string): number;
    static get locales(): object;

    constructor(element: HTMLElement, options?: DatepickerOptions, rangepicker?: DateRangePicker);
    config: DatepickerOptions;
    dates: any;
    editMode: boolean;
    element: HTMLElement;
    inline: boolean;
    inputField: any;
    picker: any;

    _options: object;
    _showing: boolean;

    get active(): boolean;
    get pickerElement(): HTMLElement | undefined;

    setOptions(options: object): void;

    show(): void;

    hide(): void;

    destroy(): Datepicker;

    getDate(format?: string): Date | string | Date[] | string[];

    setDate(...args: any[]): void;

    update(options?: { clear: boolean; render: boolean }): void;

    refresh(forceRender?: boolean): void;
    refresh(target?: 'picker' | 'input', forceRender?: boolean): void;

    enterEditMode(): void;

    exitEditMode(options?: object): void;
}
