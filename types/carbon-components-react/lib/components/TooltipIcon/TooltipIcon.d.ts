import * as React from "react";
import { Direction, ReactDivAttr, RequiresChildrenProps, TooltipAlignment } from "../../../typings/shared";

interface InheritedProps extends
    Omit<ReactDivAttr, "children">,
    RequiresChildrenProps
{ }

export interface TooltipIconProps extends InheritedProps {
    align?: TooltipAlignment,
    direction?: Extract<Direction, "bottom" | "top">, // required but has default value
    tooltipText: string,
}

declare const TooltipIcon: React.FC<TooltipIconProps>;

export default TooltipIcon;
