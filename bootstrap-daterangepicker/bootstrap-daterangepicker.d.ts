interface BootstrapDaterangePickerOptions {
    startDate: any;
    endDate: any;
    minDate: any;
    maxDate: any;
    dateLimit: any;
    showDropdowns: boolean;
    showWeekNumbers: boolean;
    timePicker: boolean;
    timePickerIncrement: number;
    timePicker12Hour: boolean;
    ranges: { [name: string]: any[] };
    opens: string;
    buttonClasses: string[];
    applyClass: string;
    cancelClass: string;
    format: string;
    separator: string;
    locale: { [name: string]: string };
    singleDatePicker: boolean;
    parentEl: string;
}

interface JQuery {
    daterangepicker(options?: BootstrapDaterangePickerOptions, callback?: (start: Moment, end: Moment) => void): JQuery;
}