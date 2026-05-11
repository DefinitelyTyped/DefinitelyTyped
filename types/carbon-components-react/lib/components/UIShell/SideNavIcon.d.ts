import * as React from "react";
import { RequiresChildrenProps } from "../../../typings/shared";

export interface SideNavIconProps extends RequiresChildrenProps {
    className?: string | undefined;
    small?: boolean | undefined;
}

declare const SideNavIcon: React.FC<SideNavIconProps>;

export default SideNavIcon;
