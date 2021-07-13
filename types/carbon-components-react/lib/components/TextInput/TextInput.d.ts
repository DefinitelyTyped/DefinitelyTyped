import * as React from "react";
import ControlledPasswordInput from "./ControlledPasswordInput";
import PasswordInput from "./PasswordInput";
import { TextInputSharedProps } from "./props";
import { ForwardRefReturn } from "../../../typings/shared";

export interface TextInputProps extends TextInputSharedProps {
    inline?: boolean | undefined,
    size?: "sm" | "md" | "lg" | "xl" | undefined,
    warn?: boolean | undefined,
    warnText?: React.ReactNode | undefined,
}

interface TextInputFC extends ForwardRefReturn<HTMLInputElement, TextInputProps> {
    readonly ControlledPasswordInput: typeof ControlledPasswordInput,
    readonly PasswordInput: typeof PasswordInput,
}

declare const TextInput: TextInputFC;

export default TextInput;
