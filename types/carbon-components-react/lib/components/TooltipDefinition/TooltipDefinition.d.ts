import * as React from "react";
import { ReactAttr, ReactDivAttr, TooltipAlignment, VerticalDirection } from "../../../typings/shared";

type ExcludedPropsKeys = "onBlur" | "onFocus";
export interface TooltipDefinitionProps extends Omit<ReactAttr<HTMLSpanElement>, ExcludedPropsKeys> {
    align?: TooltipAlignment | undefined,
    direction?: VerticalDirection | undefined, // required but has default value
    onBlur?(event: React.FocusEvent<HTMLButtonElement>): void;
    onFocus?(event: React.FocusEvent<HTMLButtonElement>): void,
    triggerClassName?: string | undefined
    tooltipText: NonNullable<React.ReactNode>,
}

declare const TooltipDefinition: React.FC<TooltipDefinitionProps>;

export default TooltipDefinition;
