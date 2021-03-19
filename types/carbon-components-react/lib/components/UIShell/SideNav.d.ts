import * as React from "react";
import { InternationalProps, ForwardRefReturn, ReactAttr } from "../../../typings/shared";

export type SideNavTranslationKey = "carbon.sidenav.state.closed" | "carbon.sidenav.state.open";

export interface SideNavProps extends ReactAttr, InternationalProps<SideNavTranslationKey> {
    addFocusListeners?: boolean;
    addMouseListeners?: boolean;
    defaultExpanded?: boolean;
    expanded?: boolean;
    isChildOfHeader?: boolean;
    isFixedNav?: boolean;
    isPersistent?: boolean;
    isRail?: boolean;
    onToggle?(event: React.FocusEvent<HTMLElement>, focus: boolean): void;
}

declare const SideNav: ForwardRefReturn<HTMLElement, SideNavProps>;

export default SideNav;
