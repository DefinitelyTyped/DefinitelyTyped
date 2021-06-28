import * as React from "react";
import { ReactDivAttr, TooltipAlignment, VerticalDirection } from "../../../typings/shared";

type ExcludedPropsKeys = "onBlur" | "onFocus";
export interface TooltipDefinitionProps extends Omit<ReactDivAttr, ExcludedPropsKeys> {
    align?: TooltipAlignment,
    direction?: VerticalDirection, // required but has default value
    onBlur?(event: React.FocusEvent<HTMLButtonElement>): void;
    onFocus?(event: React.FocusEvent<HTMLButtonElement>): void,
    triggerClassName?: string
    tooltipText: NonNullable<React.ReactNode>,
}

declare const TooltipDefinition: React.FC<TooltipDefinitionProps>;

export default TooltipDefinition;
