import * as React from "react";
import { ReactAttr, ForwardRefReturn } from "../../../typings/shared";

interface InheritedProps {
    className?: ReactAttr["className"],
    onChange?(event: React.ChangeEvent<HTMLSelectElement>): void,
}

export interface SideNavSwitcherProps extends InheritedProps {
    labelText: string;
    options: readonly string[],
}

declare const SideNavSwitcher: ForwardRefReturn<HTMLSelectElement, SideNavSwitcherProps>;

export default SideNavSwitcher;
