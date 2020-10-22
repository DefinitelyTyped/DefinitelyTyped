declare const DatePicker_base: any;
declare class DatePicker extends DatePicker_base {
    constructor(element: any, options: any);
    _handleFocus: () => void;
    _handleBlur: (event: any) => void;
    _initDatePicker: (type: any) => any;
    _rightArrowHTML(): string;
    _leftArrowHTML(): string;
    _addInputLogic: (input: any, index: any) => void;
    _updateClassNames: ({ calendarContainer, selectedDates }: {
        calendarContainer: any;
        selectedDates: any;
    }) => void;
    _updateInputFields: (selectedDates: any, type: any) => void;
    _formatDate: (date: any) => any;
    release(): any;
    static get options(): {
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
    };
    static components: WeakMap<object, any>;
}
export default DatePicker;
