import * as React from "react";

export interface HeaderSideNavItemsProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    hasDivider?: boolean | undefined;
}

declare const HeaderSideNavItems: React.FC<HeaderSideNavItemsProps>;

export default HeaderSideNavItems;
