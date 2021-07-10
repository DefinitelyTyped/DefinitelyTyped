import { Component, CSSProperties } from "react";
import { CustomPickerInjectedProps } from "../../..";

export type Remove<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface EditableInputStyles {
    input?: CSSProperties | undefined;
    label?: CSSProperties | undefined;
    wrap?: CSSProperties | undefined;
}

export type EditableInputColorResult<T> = [T] extends [string] ? { [key in T]: string } : string;

export interface EditableInputProps<A = string | undefined> extends Remove<CustomPickerInjectedProps, "onChange"> {
    label?: A | undefined;
    arrowOffset?: number | undefined;
    placeholder?: string | undefined;
    value?: string | number | undefined;
    style?: EditableInputStyles | undefined;
    dragLabel?: boolean | undefined;
    dragMax?: number | undefined;
    onChange?: ((change: EditableInputColorResult<A>) => void) | undefined;
}

export default class EditableInput<A extends string | undefined> extends Component<EditableInputProps<A>> {}
