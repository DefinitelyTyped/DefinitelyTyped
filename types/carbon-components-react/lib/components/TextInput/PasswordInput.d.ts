import * as React from "react";
import { EmbeddedTooltipProps } from "../../../typings/shared";
import { TextInputSharedProps } from "./props";

interface InheritedProps extends TextInputSharedProps, EmbeddedTooltipProps { }

export interface PasswordInputProps extends InheritedProps {
    hidePasswordLabel?: string,
    showPasswordLabel?: string,
    size?: string,
}

declare const PasswordInput: React.FC<PasswordInputProps>;

export default PasswordInput;
