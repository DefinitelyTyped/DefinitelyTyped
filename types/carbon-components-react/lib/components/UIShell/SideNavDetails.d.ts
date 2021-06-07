import * as React from "react";

export interface SideNavDetailsProps {
    children?: React.ReactNode,
    className?: string,
    title: string,
}

declare const SideNavDetails: React.FC<SideNavDetailsProps>;

export default SideNavDetails;
