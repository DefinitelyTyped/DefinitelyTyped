import { EmbeddedTooltipProps, ForwardRefReturn } from "../../../typings/shared";
import { TextInputSharedProps } from "./props";

interface InheritedProps extends TextInputSharedProps, EmbeddedTooltipProps { }

export interface ControlledPasswordInputProps extends InheritedProps {
    size?: string,
}

declare const ControlledPasswordInput: ForwardRefReturn<HTMLInputElement, ControlledPasswordInputProps>;

export default ControlledPasswordInput;
