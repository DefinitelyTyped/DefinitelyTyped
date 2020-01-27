import * as React from "react";
import { ReactAttr } from "../../../typings/shared";

interface InheritedProps {
    className?: ReactAttr["className"],
    onChange?(event: React.ChangeEvent<HTMLSelectElement>): void,
}

export interface SideNavSwitcherProps extends InheritedProps {
    options: string[],
}

declare const SideNavSwitcher: React.RefForwardingComponent<HTMLSelectElement, SideNavSwitcherProps>;

export default SideNavSwitcher;
