import * as React from "react";
import { ReactAttr, SideNavSharedProps } from '../../../typings/shared';

interface InheritedProps extends SideNavSharedProps {
    className?: ReactAttr["className"],
}

export interface SideNavFooterProps extends InheritedProps {
    assistiveText?: string, // required but has default value
    expanded: boolean,
    onToggle(event: React.MouseEvent<HTMLButtonElement>): void,
}

declare const SideNavFooter: React.FC<SideNavFooterProps>;

export default SideNavFooter;
