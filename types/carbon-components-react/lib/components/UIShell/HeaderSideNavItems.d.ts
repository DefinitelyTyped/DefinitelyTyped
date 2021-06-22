import * as React from "react";

export interface HeaderSideNavItemsProps {
    children?: React.ReactNode,
    className?: string,
    hasDivider?: boolean,
}

declare const HeaderSideNavItems: React.FC<HeaderSideNavItemsProps>;

export default HeaderSideNavItems;
