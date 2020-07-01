import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    children?: ReactAttr["children"],
    className?: ReactAttr["className"],
}

export interface HeaderSideNavItemsProps extends InheritedProps {
    hasDivider?: boolean,
}

declare const HeaderSideNavItems: React.FC<HeaderSideNavItemsProps>;

export default HeaderSideNavItems;
