import React = require("react");
import { SideNavSharedProps } from "../../../typings/shared";

export interface SideNavHeaderProps extends SideNavSharedProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    renderIcon: any;
}

declare const SideNavHeader: React.FC<SideNavHeaderProps>;

export default SideNavHeader;
