import * as React from "react";
import { ReactButtonAttr } from "../../../typings/shared";

type ExcludedAttributes = "title" | "type";
interface InheritedProps extends Omit<ReactButtonAttr, ExcludedAttributes> { }

export interface HeaderMenuButtonProps extends InheritedProps {
    isActive?: boolean,
    isCollapsible?: boolean,
}

declare const HeaderMenuButton: React.FC<HeaderMenuButtonProps>;

export default HeaderMenuButton;
