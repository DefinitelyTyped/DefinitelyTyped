import { ForwardRefReturn, TooltipAlignment, TooltipPosition } from "../../../typings/shared";
import { TextInputSharedProps } from "./props";

export interface PasswordInputProps extends TextInputSharedProps {
    hidePasswordLabel?: string,
    showPasswordLabel?: string,
    size?: string,
    tooltipAlignment?: TooltipAlignment;
    tooltipPosition?: TooltipPosition;
}

declare const PasswordInput: ForwardRefReturn<HTMLInputElement, PasswordInputProps>;

export default PasswordInput;
