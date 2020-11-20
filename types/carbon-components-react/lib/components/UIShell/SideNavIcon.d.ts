import * as React from "react";
import { RequiresChildrenProps } from "../../../typings/shared";

export interface SideNavIconProps extends RequiresChildrenProps {
    className?: string,
    small?: boolean,
}

declare const SideNavIcon: React.FC<SideNavIconProps>;

export default SideNavIcon;
