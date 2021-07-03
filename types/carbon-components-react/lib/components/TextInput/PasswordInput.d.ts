import * as React from "react";
import { ForwardRefReturn, TooltipAlignment, TooltipPosition } from "../../../typings/shared";
import { TextInputSharedProps } from "./props";

export interface PasswordInputProps extends TextInputSharedProps {
    hidePasswordLabel?: string,
    inline?: boolean;
    onTogglePasswordVisibility?(evt: React.MouseEvent<HTMLButtonElement>): void;
    showPasswordLabel?: string,
    size?: string,
    tooltipAlignment?: TooltipAlignment;
    tooltipPosition?: TooltipPosition;
    warn?: boolean;
    warnText?: React.ReactNode;
}

declare const PasswordInput: ForwardRefReturn<HTMLInputElement, PasswordInputProps>;

export default PasswordInput;
