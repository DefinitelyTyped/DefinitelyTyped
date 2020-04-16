import * as React from "react";
import { EmbeddedTooltipProps, RefForwardingProps } from "../../../typings/shared";
import { TextInputInheritedProps } from "./props";

interface InheritedProps extends TextInputInheritedProps, EmbeddedTooltipProps { }

export interface ControlledPasswordInputProps extends InheritedProps { }

declare const ControlledPasswordInput: React.RefForwardingComponent<HTMLInputElement, ControlledPasswordInputProps>;

export default ControlledPasswordInput;
