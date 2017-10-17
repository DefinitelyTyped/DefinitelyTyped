// Type definitions for react-flatpickr 3.2
// Project: https://github.com/coderhaoxin/react-flatpickr
// Definitions by: begincalendar <https://github.com/begincalendar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { EventCallback, Options } from 'flatpickr';

export interface DateTimePickerProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    defaultValue?: string;
    options?: Options;
    onChange?: EventCallback;
    value?: string;
}

export default class DatePicker extends Component<DateTimePickerProps> {}
