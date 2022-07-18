// Type definitions for react-flatpickr 3.8
// Project: https://github.com/coderhaoxin/react-flatpickr
// Definitions by: snaveevans <https://github.com/snaveevans>
//                 doniyor2109 <https://github.com/doniyor2109>
//                 jleider <https://github.com/jleider>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component, ReactElement } from "react";
import flatpickr from "flatpickr";

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface DateTimePickerProps extends Omit<Partial<HTMLInputElement>, 'children' | 'value'> {
    defaultValue?: string | undefined;
    options?: flatpickr.Options.Options | undefined;
    onChange?: flatpickr.Options.Hook | undefined;
    onOpen?: flatpickr.Options.Hook | undefined;
    onClose?: flatpickr.Options.Hook | undefined;
    onMonthChange?: flatpickr.Options.Hook | undefined;
    onYearChange?: flatpickr.Options.Hook | undefined;
    onReady?: flatpickr.Options.Hook | undefined;
    onValueUpdate?: flatpickr.Options.Hook | undefined;
    onDayCreate?: flatpickr.Options.Hook | undefined;
    value?: string | Date | number | ReadonlyArray<string | Date | number> | undefined;
    className?: string | undefined;
    children?: React.ReactNode | undefined;
    render?: ((props: Omit<DateTimePickerProps, 'options' | 'render'>, ref: (node: HTMLInputElement | null) => void) => ReactElement) | undefined;
}

export default class DatePicker extends Component<DateTimePickerProps> {
    flatpickr: flatpickr.Instance;
}
