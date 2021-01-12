import * as React from "react";
import { SideNavSharedProps } from "../../../typings/shared";

export interface SideNavHeaderProps extends SideNavSharedProps {
    children?: React.ReactNode,
    className?: string,
    renderIcon: any;
}

declare const SideNavHeader: React.FC<SideNavHeaderProps>;

export default SideNavHeader;
