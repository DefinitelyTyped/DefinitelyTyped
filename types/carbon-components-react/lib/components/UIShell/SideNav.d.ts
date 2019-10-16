import * as React from "react";
import { InternationalProps, ReactAttr } from "../../../typings/shared";

export type SideNavTranslationKey = "carbon.sidenav.state.closed" | "carbon.sidenav.state.open";
interface InheritedProps extends InternationalProps<SideNavTranslationKey> {
    "aria-label"?: ReactAttr["aria-label"],
    "aria-labelledby"?: ReactAttr["aria-labelledby"],
    className?: ReactAttr["className"],
}

export interface SideNavProps extends InheritedProps {
    addMouseListeners?: boolean;
    defaultExpanded?: boolean;
    expanded?: boolean;
    isChildOfHeader?: boolean;
    isFixedNav?: boolean;
    isPersistent?: boolean;
    isRail?: boolean;
    onToggle?(event: React.FocusEvent<HTMLElement>, focus: boolean): void;
}

declare const SideNav: React.RefForwardingComponent<HTMLElement, SideNavProps>;

export default SideNav;
