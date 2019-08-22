import * as React from "react";
import { Direction, ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr { }

export interface TooltipDefinitionProps extends InheritedProps {
    direction?: Extract<Direction, "bottom" | "top">, // required but has default value
    tooltipText: NonNullable<React.ReactNode>,
}

declare const TooltipDefinition: React.FC<TooltipDefinitionProps>;

export default TooltipDefinition;
