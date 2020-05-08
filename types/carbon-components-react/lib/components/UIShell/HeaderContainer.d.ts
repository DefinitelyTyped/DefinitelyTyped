import * as React from "react";

/**
 * Convenience interface for the custom render prop.
 */
export interface HeaderContainerRenderProps {
    isSideNavExpanded: boolean,
    onClickSideNavExpand(): void;
}

export interface HeaderContainerProps {
    isSideNavExpanded?: boolean,
    render: React.ComponentType,
}

declare const HeaderContainer: React.FC<HeaderContainerProps>;

export default HeaderContainer;
