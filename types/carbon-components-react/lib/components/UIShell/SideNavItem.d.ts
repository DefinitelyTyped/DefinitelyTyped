import * as React from "react";
import { ReactAttr, RequiresChildrenProps, SideNavSizingProps } from '../../../typings/shared';

interface InheritedProps extends RequiresChildrenProps, SideNavSizingProps {
    className?: ReactAttr["className"],
}

export interface SideNavItemProps extends InheritedProps { }

declare const SideNavItem: React.FC<SideNavItemProps>;

export default SideNavItem;
