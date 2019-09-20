import * as React from "react";
import ControlledPasswordInput from "./ControlledPasswordInput";
import PasswordInput from "./PasswordInput";
import { TextInputInheritedProps } from "./props";

export interface TextInputProps extends TextInputInheritedProps { }

interface TextInputFC extends React.RefForwardingComponent<HTMLInputElement, TextInputProps> {
    readonly ControlledPasswordInput: typeof ControlledPasswordInput,
    readonly PasswordInput: typeof PasswordInput,
}

declare const TextInput: TextInputFC;

export default TextInput;
