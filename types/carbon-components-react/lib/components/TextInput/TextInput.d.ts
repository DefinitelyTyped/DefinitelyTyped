import * as React from "react";
import ControlledPasswordInput from "./ControlledPasswordInput";
import PasswordInput from "./PasswordInput";
import { TextInputInheritedProps } from "./props";

export interface TextInputProps extends TextInputInheritedProps { }

interface TextInputFC extends React.RefForwardingComponent<HTMLInputElement, TextInputProps> {
    readonly ControlledPasswordInput: ControlledPasswordInput,
    readonly PasswordInput: PasswordInput,
}

declare const TextInput: TextInputFC;

export default TextInput;
