import * as React from "react";
import { ForwardRefReturn, TooltipAlignment, TooltipPosition } from "../../../typings/shared";
import { TextInputSharedProps } from "./props";

export interface PasswordInputProps extends TextInputSharedProps {
    hidePasswordLabel?: string | undefined;
    inline?: boolean | undefined;
    onTogglePasswordVisibility?(evt: React.MouseEvent<HTMLButtonElement>): void;
    showPasswordLabel?: string | undefined;
    size?: string | undefined;
    tooltipAlignment?: TooltipAlignment | undefined;
    tooltipPosition?: TooltipPosition | undefined;
    warn?: boolean | undefined;
    warnText?: React.ReactNode | undefined;
}

declare const PasswordInput: ForwardRefReturn<HTMLInputElement, PasswordInputProps>;

export default PasswordInput;
