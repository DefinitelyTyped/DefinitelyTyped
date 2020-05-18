import * as React from "react";
import { FCReturn } from "../../../typings/shared";

/**
 * Convenience interface for the custom render prop.
 */
export interface HeaderContainerRenderProps {
    isSideNavExpanded: boolean,
    onClickSideNavExpand(): void;
}

export interface HeaderContainerProps<RP = HeaderContainerRenderProps> {
    isSideNavExpanded?: boolean,
    render: React.ComponentType<RP>,
}

declare function HeaderContainer<RP = HeaderContainerRenderProps>(props: React.PropsWithChildren<HeaderContainerProps<RP>>): FCReturn;

export default HeaderContainer;
