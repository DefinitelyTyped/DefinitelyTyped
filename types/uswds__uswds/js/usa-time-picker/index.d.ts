interface TimePicker {
    FILTER_DATASET: {
        filter: string;
        apQueryFilter: string;
        hourQueryFilter: string;
        minuteQueryFilter: string;
    };
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
}

declare const timePicker: TimePicker;

export default timePicker;
