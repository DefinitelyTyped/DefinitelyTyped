import * as React from "react";
import { FCReturn } from "../../../typings/shared";

export interface HeaderMenuProps<RP = {}> {
    "aria-label"?: string | undefined,
    "aria-labelledby"?: string | undefined,
    children?: React.ReactNode | undefined,
    className?: string | undefined,
    menuLinkName: string,
    ref?(element: HTMLElement): void;
    renderMenuContent?: React.ComponentType<RP> | undefined,
    tabIndex?: number | undefined,
}

declare class HeaderMenu extends React.Component<HeaderMenuProps> { }

declare function HeaderMenuForwardRef<RP = {}>(props: HeaderMenuProps<RP>): FCReturn;

export default HeaderMenuForwardRef;
