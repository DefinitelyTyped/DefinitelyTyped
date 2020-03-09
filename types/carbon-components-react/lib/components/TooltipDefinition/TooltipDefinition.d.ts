import * as React from "react";
import { Direction, ReactDivAttr, TooltipAlignment } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface TooltipDefinitionProps extends InheritedProps {
    direction?: Extract<Direction, "bottom" | "top">, // required but has default value
    align?: TooltipAlignment,
    triggerClassName?: string
    tooltipText: NonNullable<React.ReactNode>,
}

declare const TooltipDefinition: React.FC<TooltipDefinitionProps>;

export default TooltipDefinition;
