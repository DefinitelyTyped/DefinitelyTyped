import * as React from "react";

export = NumericInput;

declare namespace NumericInput {
    type BoundsFunctionProp = number | ((component: NumericInput) => number | undefined);
    type Omit<T, K> = Pick<T, Exclude<keyof T, K>>; // via TS 2.8 manual
    interface NumericInputProps extends
        Omit<
            React.InputHTMLAttributes<HTMLInputElement>,
            "min" | "max" | "step" | "onChange" | "defaultValue" | "onInvalid" | "style"
        >
    {
        addLabelText?: string | undefined;
        componentClass?: string | undefined;
        defaultValue?: number | string | undefined;
        format?: ((value: number | null) => string) | undefined;
        max?: BoundsFunctionProp | undefined;
        min?: BoundsFunctionProp | undefined;
        mobile?: boolean | "auto" | ((component: NumericInput) => boolean) | undefined;
        noStyle?: boolean | undefined;
        noValidate?: boolean | string | undefined;
        onBlur?: React.FocusEventHandler<HTMLDivElement | HTMLInputElement> | undefined;
        onChange?: ((value: number | null, stringValue: string, input: HTMLInputElement) => void) | undefined;
        onFocus?: React.FocusEventHandler<HTMLDivElement | HTMLInputElement> | undefined;
        onInput?: React.FormEventHandler<HTMLInputElement> | undefined;
        onInvalid?: ((error: string, value: number | null, stringValue: string) => void) | undefined;
        onKeyDown?: React.KeyboardEventHandler<HTMLDivElement | HTMLInputElement> | undefined;
        onSelect?: React.ReactEventHandler<HTMLInputElement> | undefined;
        onValid?: ((value: number | null, stringValue: string) => void) | undefined;
        parse?: ((stringValue: string) => number | null) | undefined;
        precision?: number | ((component: NumericInput) => number | null | undefined) | undefined;
        snap?: boolean | undefined;
        step?: number | ((component: NumericInput, direction: string) => number | undefined) | undefined;
        strict?: boolean | undefined;
        style?: { [key: string]: React.CSSProperties } | boolean | undefined;
        value?: number | string | undefined;
    }
    // Exposed here for the function prop handlers that get the NumericInput instance as a parameter.
    // Lifted directly from react-numeric-input@79874ccbe:/src/NumericInput.jsx#L63-L73
    interface NumericInputState {
        btnDownActive?: boolean | undefined;
        btnDownHover?: boolean | undefined;
        btnUpActive?: boolean | undefined;
        btnUpHover?: boolean | undefined;
        selectionEnd?: number | null | undefined;
        selectionStart?: number | null | undefined;
        stringValue?: string | undefined;
        value?: number | null | undefined;
    }
}

declare class NumericInput extends React.Component<NumericInput.NumericInputProps, NumericInput.NumericInputState> {
    static DIRECTION_UP: string;
    static DIRECTION_DOWN: string;
}
