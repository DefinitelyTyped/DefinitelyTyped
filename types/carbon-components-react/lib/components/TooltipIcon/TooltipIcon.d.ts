import * as React from "react";
import { Direction, ReactButtonAttr, RequiresChildrenProps, TooltipAlignment } from "../../../typings/shared";

interface InheritedProps extends
    Omit<ReactButtonAttr, "children">,
    RequiresChildrenProps
{ }

export interface TooltipIconProps extends InheritedProps {
    align?: TooltipAlignment,
    direction?: Direction, // required but has default value, should be bottom/top but the prop type has left/right
    tooltipText: string,
}

declare const TooltipIcon: React.FC<TooltipIconProps>;

export default TooltipIcon;
