import * as React from "react";
import { ReactAttr, SideNavSharedProps } from '../../../typings/shared';

interface InheritedProps extends SideNavSharedProps {
    children: ReactAttr["children"],
    className?: ReactAttr["className"],
}

export interface SideNavItemsProps extends InheritedProps {}

declare const SideNavItems: React.FC<SideNavItemsProps>;

export default SideNavItems;
