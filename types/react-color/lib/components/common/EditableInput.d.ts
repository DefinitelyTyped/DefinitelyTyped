import { Component, ClassAttributes, CSSProperties } from "react";
import { Color, ColorChangeHandler } from "react-color";

export interface EditableInputStyles {
    input?: CSSProperties;
    label?: CSSProperties;
    wrap?: CSSProperties;
}

export interface EditableInputProps extends ClassAttributes<EditableInput> {
    color?: Color;
    label?: string;
    onChange?: ColorChangeHandler;
    styles?: EditableInputStyles;
    value?: any;
}

export default class EditableInput extends Component<EditableInputProps, any> {}
