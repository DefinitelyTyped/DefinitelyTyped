import { Component, ClassAttributes } from "react";
import * as ReactDOM from "react-dom";
import { Color, ColorChangeHandler } from "../../..";

export interface EditableInputStyles {
    input?: ReactDOM.CSSProperties;
    label?: ReactDOM.CSSProperties;
    wrap?: ReactDOM.CSSProperties;
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
