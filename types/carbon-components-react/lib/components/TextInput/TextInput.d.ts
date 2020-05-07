import ControlledPasswordInput from "./ControlledPasswordInput";
import PasswordInput from "./PasswordInput";
import { TextInputSharedProps } from "./props";
import { ForwardRefReturn, CarbonInputSize } from "../../../typings/shared";

export interface TextInputProps extends TextInputSharedProps {
    size?: Extract<CarbonInputSize, "sm" | "xl">,
}

interface TextInputFC extends ForwardRefReturn<HTMLInputElement, TextInputProps> {
    readonly ControlledPasswordInput: typeof ControlledPasswordInput,
    readonly PasswordInput: typeof PasswordInput,
}

declare const TextInput: TextInputFC;

export default TextInput;
