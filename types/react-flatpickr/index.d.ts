// Type definitions for react-flatpickr 3.2
// Project: https://github.com/coderhaoxin/react-flatpickr
// Definitions by: begincalendar <https://github.com/begincalendar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';
import flatpickr from 'flatpickr';

export interface DateTimePickerProps {
    defaultValue?: string;
    options?: flatpickr.Options.Options;
    onChange?: flatpickr.Options.Hook;
    value?: string;
    className?: string;
}

export default class DatePicker extends Component<DateTimePickerProps> {}
