import Datepicker from './Datepicker';

export interface DateRangePickerOptions {
    inputs?: HTMLElement[];
    allowOneSidedRange?: boolean;
}
export default class DateRangePicker {
    constructor(element: HTMLElement, options?: DateRangePickerOptions);
    allowOneSidedRange: boolean;
    element: HTMLElement;
    inputs: HTMLElement[];
    datepickers: Datepicker[];

    get dates(): Date[] | undefined;

    setOptions(options: object): void;

    destroy(): DateRangePicker;

    getDates(format?: string): [Date | undefined, Date | undefined];

    setDates(rangeStart: Date | number | string | object, rangeEnd: Date | number | string | object): void;
    _updating: boolean;
}
