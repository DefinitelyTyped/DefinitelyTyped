// Type definitions for react-flatpickr 3.8
// Project: https://github.com/coderhaoxin/react-flatpickr
// Definitions by: snaveevans <https://github.com/snaveevans>
//                 rigothedev <https://github.com/rigothedev>
//                 doniyor2109 <https://github.com/doniyor2109>
//                 jleider <https://github.com/jleider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactElement } from "react";
import flatpickr from "flatpickr";

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface DateTimePickerProps extends Omit<Partial<HTMLInputElement>, 'value'> {
    defaultValue?: string;
    options?: flatpickr.Options.Options;
    onChange?: flatpickr.Options.Hook;
    onOpen?: flatpickr.Options.Hook;
    onClose?: flatpickr.Options.Hook;
    onMonthChange?: flatpickr.Options.Hook;
    onYearChange?: flatpickr.Options.Hook;
    onReady?: flatpickr.Options.Hook;
    onValueUpdate?: flatpickr.Options.Hook;
    onDayCreate?: flatpickr.Options.Hook;
    value?: string | Date | number | ReadonlyArray<string | Date | number>;
    className?: string;
    render?: (props: Omit<DateTimePickerProps, 'options' | 'render'>, ref: (node: HTMLInputElement) => void) => ReactElement;
}

export default class DatePicker extends Component<DateTimePickerProps> {
    flatpickr: flatpickr.Instance;
}
