import * as React from "react";
import { ReactDivAttr, TooltipAlignment, VerticalDirection } from "../../../typings/shared";

export interface TooltipDefinitionProps extends Omit<ReactDivAttr, "onFocus"> {
    align?: TooltipAlignment,
    direction?: VerticalDirection, // required but has default value
    onFocus?(event: React.MouseEvent<HTMLButtonElement>): void,
    triggerClassName?: string
    tooltipText: NonNullable<React.ReactNode>,
}

declare const TooltipDefinition: React.FC<TooltipDefinitionProps>;

export default TooltipDefinition;
