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
    style?: EditableInputStyles;
    value?: any;
    dragLabel?: string;
    dragMax?: string;
}

export default class EditableInput extends Component<EditableInputProps> {}
