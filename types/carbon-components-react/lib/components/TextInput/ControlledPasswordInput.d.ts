import * as React from "react";
import { ForwardRefReturn, TooltipAlignment, TooltipPosition } from "../../../typings/shared";
import { TextInputSharedProps } from "./props";

export interface ControlledPasswordInputProps extends TextInputSharedProps {
    hidePasswordLabel?: string;
    showPasswordLabel?: string;
    size?: string,
    togglePasswordVisibility?(event: React.MouseEvent<HTMLButtonElement>): void,
    tooltipAlignment?: TooltipAlignment;
    tooltipPosition?: TooltipPosition;
}

declare const ControlledPasswordInput: ForwardRefReturn<HTMLInputElement, ControlledPasswordInputProps>;

export default ControlledPasswordInput;
