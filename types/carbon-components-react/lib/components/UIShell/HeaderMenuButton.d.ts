import * as React from "react";
import { ReactButtonAttr } from "../../../typings/shared";

type ExcludedAttributes = "title" | "type";

export interface HeaderMenuButtonProps extends Omit<ReactButtonAttr, ExcludedAttributes> {
    isActive?: boolean | undefined;
    isCollapsible?: boolean | undefined;
    renderCloseIcon?: React.ReactNode | undefined;
    renderMenuIcon?: React.ReactNode | undefined;
}

declare const HeaderMenuButton: React.FC<HeaderMenuButtonProps>;

export default HeaderMenuButton;
