import { ClassAttributes, Component, CSSProperties } from "react";
import { Color, ColorChangeHandler } from "../../..";

export interface EditableInputStyles {
    input?: CSSProperties | undefined;
    label?: CSSProperties | undefined;
    wrap?: CSSProperties | undefined;
}

export interface EditableInputProps extends ClassAttributes<EditableInput> {
    color?: Color | undefined;
    label?: string | undefined;
    onChange?: ColorChangeHandler | undefined;
    style?: EditableInputStyles | undefined;
    value?: any;
    dragLabel?: string | undefined;
    dragMax?: string | undefined;
}

export default class EditableInput extends Component<EditableInputProps> {}
