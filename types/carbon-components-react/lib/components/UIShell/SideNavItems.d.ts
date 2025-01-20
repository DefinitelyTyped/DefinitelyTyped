import * as React from "react";
import { RequiresChildrenProps, SideNavSharedProps } from "../../../typings/shared";

export interface SideNavItemsProps extends SideNavSharedProps, RequiresChildrenProps {
    className?: string | undefined;
}

declare const SideNavItems: React.FC<SideNavItemsProps>;

export default SideNavItems;
