import * as React from "react";

export interface SideNavDetailsProps {
    children?: React.ReactNode | undefined;
    className?: string | undefined;
    title: string;
}

declare const SideNavDetails: React.FC<SideNavDetailsProps>;

export default SideNavDetails;
