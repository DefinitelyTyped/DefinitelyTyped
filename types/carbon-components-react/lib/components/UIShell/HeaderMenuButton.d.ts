import * as React from "react";
import { ReactButtonAttr } from "../../../typings/shared";

type ExcludedAttributes = "title" | "type";

export interface HeaderMenuButtonProps extends Omit<ReactButtonAttr, ExcludedAttributes> {
    isActive?: boolean,
    isCollapsible?: boolean,
}

declare const HeaderMenuButton: React.FC<HeaderMenuButtonProps>;

export default HeaderMenuButton;
