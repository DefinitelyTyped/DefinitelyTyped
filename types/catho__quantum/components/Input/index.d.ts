import React = require('react');

import { Validations } from '../Form';
import { string } from 'prop-types';

export type MaskFunction = (rawValue: string) => string[];
export type Mask = boolean | RegExp | string | MaskFunction;
export type Validate =
    | typeof Validations.Required
    | typeof Validations.CPF
    | typeof Validations.CEP
    | typeof Validations.Date
    | typeof Validations.MinLength
    | typeof Validations.MaxLength
    | typeof Validations.Email;
export type CustomValidate = ((param?: { value: string }) => string) | { validate: Validate; error: string };

export interface InputProps<T> {
    value?: string;
    label?: string;
    helperText?: string;
    descriptionLabel?: string;
    required?: boolean;
    placeholder?: string;
    type?: 'email' | 'text' | 'tel' | 'number' | 'password' | 'search';
    error?: string;
    id?: string;
    name?: string;
    validate?: Validate | CustomValidate | Array<Validate | CustomValidate>;
    mask?: Mask | Mask[];
    onClean?: React.MouseEventHandler<T>;
    onChange?: React.ChangeEventHandler<T>;
    theme?: {
        spacing?: object;
        colors?: object;
        baseFontSize?: number;
    };
}

export default class Input<T = HTMLInputElement> extends React.Component<InputProps<T>> {}
