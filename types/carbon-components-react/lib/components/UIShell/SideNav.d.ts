import * as React from "react";
import { ForwardRefReturn, InternationalProps, ReactAttr } from "../../../typings/shared";

export type SideNavTranslationKey = "carbon.sidenav.state.closed" | "carbon.sidenav.state.open";

export interface SideNavProps extends ReactAttr, InternationalProps<SideNavTranslationKey> {
    addFocusListeners?: boolean | undefined;
    addMouseListeners?: boolean | undefined;
    defaultExpanded?: boolean | undefined;
    expanded?: boolean | undefined;
    isChildOfHeader?: boolean | undefined;
    isFixedNav?: boolean | undefined;
    isPersistent?: boolean | undefined;
    isRail?: boolean | undefined;
    onOverlayClick?(evt: React.MouseEvent<HTMLDivElement>): void;
    onToggle?(event: React.FocusEvent<HTMLElement>, focus: boolean): void;
}

declare const SideNav: ForwardRefReturn<HTMLElement, SideNavProps>;

export default SideNav;
