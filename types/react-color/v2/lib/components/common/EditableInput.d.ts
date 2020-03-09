import { Component, CSSProperties } from "react";
import { CustomPickerInjectedProps } from "../../..";

export interface EditableInputStyles {
    input?: CSSProperties;
    label?: CSSProperties;
    wrap?: CSSProperties;
}

export interface EditableInputProps extends CustomPickerInjectedProps {
    label?: string;
    arrowOffset?: number;
    placeholder?: string;
    value?: string | number;
    style?: EditableInputStyles;
    dragLabel?: boolean;
    dragMax?: number;
}

export default class EditableInput extends Component<EditableInputProps> {}
