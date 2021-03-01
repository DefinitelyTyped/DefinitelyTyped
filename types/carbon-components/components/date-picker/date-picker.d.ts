interface DatePickerOptions {
    selectorInit: string;
    selectorDatePickerInput: string;
    selectorDatePickerInputFrom: string;
    selectorDatePickerInputTo: string;
    selectorDatePickerIcon: string;
    selectorFlatpickrMonthYearContainer: string;
    selectorFlatpickrYearContainer: string;
    selectorFlatpickrCurrentMonth: string;
    classCalendarContainer: string;
    classMonth: string;
    classWeekdays: string;
    classDays: string;
    classWeekday: string;
    classDay: string;
    classFocused: string;
    classVisuallyHidden: string;
    classFlatpickrCurrentMonth: string;
    attribType: string;
    dateFormat: string;
}

declare const DatePicker_base: any;
declare class DatePicker extends DatePicker_base {
    constructor(element: HTMLElement, options?: Partial<DatePickerOptions>);
    _handleFocus: () => void;
    _handleBlur: (event: FocusEvent) => void;
    _initDatePicker: (type?: string) => any; // returns a Flatpickr calendar instance
    _rightArrowHTML(): string;
    _leftArrowHTML(): string;
    _addInputLogic: (input: HTMLElement, index: number) => void;
    _updateClassNames: ({
        calendarContainer,
        selectedDates,
    }: {
        calendarContainer: HTMLElement;
        selectedDates: Date[];
    }) => void;
    _updateInputFields: (selectedDates: Date[], type?: string) => void;
    _formatDate: (date: Date) => string;
    release(): any;
    static get options(): DatePickerOptions;
    static components: WeakMap<object, any>;
}
export default DatePicker;
