// Type definitions for react-flatpickr 3.2
// Project: https://github.com/coderhaoxin/react-flatpickr
// Definitions by: begincalendar <https://github.com/begincalendar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Component, DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes } from 'react';
import { Hook, Options } from 'flatpickr';

type HTMLProps = {onChange?: Hook}       // needed because there is a conflit with div and input props
    | DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    | DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
;

export type DateTimePickerProps = HTMLProps & {
    defaultValue?: string;
    options?: Options;
    onChange?: Hook;
    value?: string;
}

export default class DatePicker extends Component<DateTimePickerProps> {}
