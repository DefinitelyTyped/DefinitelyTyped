import * as React from "react";
import { FCReturn, ReactLIAttr } from "../../../typings/shared";

interface HeaderMenuProps<RP = {}> extends ReactLIAttr {
    isCurrentPage?: boolean | undefined;
    menuLinkName: string,
    focusRef?(element: HTMLElement): void;
    renderMenuContent?: React.ComponentType<RP> | undefined,
}

declare class HeaderMenu extends React.Component<HeaderMenuProps> { }

export interface HeaderMenuForwardRefProps<RP = {}> extends Omit<HeaderMenuProps<RP>, "focusRef" | "ref"> {
    ref?: HeaderMenuProps<RP>["focusRef"] | undefined;
}

declare function HeaderMenuForwardRef<RP = {}>(props: HeaderMenuForwardRefProps<RP>): FCReturn;

export default HeaderMenuForwardRef;
