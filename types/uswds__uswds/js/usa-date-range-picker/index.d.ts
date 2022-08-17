interface DateRangePicker {
    init(root: HTMLElement | Document): void;
    on(el: HTMLElement): void;
    off(el: HTMLElement): void;
}

declare const dateRangePicker: DateRangePicker;

export default dateRangePicker;
