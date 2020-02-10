import React = require('react');

export interface TextAreaProps<T> {
    disabled?: boolean;
    error?: string;
    helperText?: string;
    label?: string;
    onChange?: React.ChangeEventHandler<T>;
    placeholder?: string;
    required?: boolean;
    value?: string;
    id?: string | number;
}

export default class TextArea<T = HTMLInputElement> extends React.Component<TextAreaProps<T>> {}
