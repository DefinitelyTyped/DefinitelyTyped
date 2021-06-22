import * as React from "react";
import { ForwardRefReturn } from "../../../typings/shared";

export interface SideNavSwitcherProps {
    children?: React.ReactNode,
    className?: string,
    labelText: string;
    onChange?(event: React.ChangeEvent<HTMLSelectElement>): void,
    options: readonly string[],
}

declare const SideNavSwitcher: ForwardRefReturn<HTMLSelectElement, SideNavSwitcherProps>;

export default SideNavSwitcher;
