import * as React from "react";
import { ForwardRefReturn, TooltipAlignment, TooltipPosition } from "../../../typings/shared";
import { TextInputSharedProps } from "./props";

/**
 * @deprecated
 */
export interface ControlledPasswordInputProps extends TextInputSharedProps {
    hidePasswordLabel?: string | undefined;
    showPasswordLabel?: string | undefined;
    size?: string | undefined;
    togglePasswordVisibility?(event: React.MouseEvent<HTMLButtonElement>): void;
    tooltipAlignment?: TooltipAlignment | undefined;
    tooltipPosition?: TooltipPosition | undefined;
}

/**
 * @deprecated
 */
declare const ControlledPasswordInput: ForwardRefReturn<HTMLInputElement, ControlledPasswordInputProps>;

export default ControlledPasswordInput;
