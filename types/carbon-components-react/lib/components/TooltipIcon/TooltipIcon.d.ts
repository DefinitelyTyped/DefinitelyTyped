import * as React from "react";
import { Direction, ReactButtonAttr, TooltipAlignment } from "../../../typings/shared";

type ExcludedAttributes = "aria-describedby" | "children" | "type";
export interface TooltipIconProps extends Omit<ReactButtonAttr, ExcludedAttributes> {
    align?: TooltipAlignment,
    children: NonNullable<React.ReactNode>,
    direction?: Direction, // required but has default value, should be bottom/top but the prop type has left/right
    tooltipText: NonNullable<React.ReactNode>;
}

declare const TooltipIcon: React.FC<TooltipIconProps>;

export default TooltipIcon;
