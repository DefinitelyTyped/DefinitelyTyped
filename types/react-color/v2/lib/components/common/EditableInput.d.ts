import { Component, CSSProperties } from "react";
import { CustomPickerInjectedProps } from "../../..";

export type Remove<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface EditableInputStyles {
    input?: CSSProperties;
    label?: CSSProperties;
    wrap?: CSSProperties;
}

export type EditableInputColorResult<T> = [T] extends [string] ? { [key in T]: string } : string;

export interface EditableInputProps<A = string | undefined> extends Remove<CustomPickerInjectedProps, "onChange"> {
    label?: A;
    arrowOffset?: number;
    placeholder?: string;
    value?: string | number;
    style?: EditableInputStyles;
    dragLabel?: boolean;
    dragMax?: number;
    onChange?: (change: EditableInputColorResult<A>) => void;
}

export default class EditableInput<A extends string | undefined> extends Component<EditableInputProps<A>> {}
