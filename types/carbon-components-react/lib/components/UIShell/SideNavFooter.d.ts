import * as React from "react";
import { SideNavSharedProps } from "../../../typings/shared";

export interface SideNavFooterProps extends SideNavSharedProps {
    assistiveText?: string | undefined; // required but has default value
    className?: string | undefined;
    expanded: boolean;
    onToggle(event: React.MouseEvent<HTMLButtonElement>): void;
}

declare const SideNavFooter: React.FC<SideNavFooterProps>;

export default SideNavFooter;
