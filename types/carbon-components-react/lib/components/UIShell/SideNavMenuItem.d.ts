import * as React from "react";
import { ReactAnchorAttr, FCReturn, ForwardRefProps, } from "../../../typings/shared";
import { LinkProps } from "./Link";

export interface SideNavMenuItemPropsBase {
    children?: React.ReactNode,
    className?: string,
    isActive?: boolean,
}

export type SideNavMenuItemProps<E extends object = ReactAnchorAttr> = LinkProps<E> & SideNavMenuItemPropsBase;

declare function SideNavMenuItem<E extends object = ReactAnchorAttr, R = HTMLElement>(
    props: ForwardRefProps<R, SideNavMenuItemProps<E>>
): FCReturn;

export default SideNavMenuItem;
