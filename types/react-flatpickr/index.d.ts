// Type definitions for react-flatpickr 3.7
// Project: https://github.com/coderhaoxin/react-flatpickr
// Definitions by: begincalendar <https://github.com/begincalendar>
//                 snaveevans <https://github.com/snaveevans>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactElement } from "react";
import flatpickr from "flatpickr";

export type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

export interface DateTimePickerProps {
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
    render?: (props: Omit<DateTimePickerProps, 'options' | 'render'>, ref: (node: HTMLInputElement) => void) => ReactElement<any>
}

export default class DatePicker extends Component<DateTimePickerProps> {}
