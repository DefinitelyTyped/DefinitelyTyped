import React = require('react');

export interface TextAreaProps {
    disabled?: boolean;
    error?: string;
    helperText?: string;
    label?: string;
    onChange?: () => void;
    placeholder?: string;
    required?: boolean;
    value?: string;
    id?: string | number;
}

export default class TextArea extends React.Component<TextAreaProps> {}
