import * as React from "react";
import { SideNavSharedProps } from "../../../typings/shared";

export interface SideNavFooterProps extends SideNavSharedProps {
    assistiveText?: string, // required but has default value
    className?: string,
    expanded: boolean,
    onToggle(event: React.MouseEvent<HTMLButtonElement>): void,
}

declare const SideNavFooter: React.FC<SideNavFooterProps>;

export default SideNavFooter;
