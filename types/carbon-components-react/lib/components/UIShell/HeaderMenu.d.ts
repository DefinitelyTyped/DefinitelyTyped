import * as React from "react";
import { FCReturn } from "../../../typings/shared";

export interface HeaderMenuProps<RP = {}> {
    "aria-label"?: string,
    "aria-labelledby"?: string,
    children?: React.ReactNode,
    className?: string,
    menuLinkName: string,
    ref?(element: HTMLElement): void;
    renderMenuContent?: React.ComponentType<RP>,
    tabIndex?: number,
}

declare class HeaderMenu extends React.Component<HeaderMenuProps> { }

declare function HeaderMenuForwardRef<RP = {}>(props: HeaderMenuProps<RP>): FCReturn;

export default HeaderMenuForwardRef;
