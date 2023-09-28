import * as React from "react";
import { ReactLIAttr } from "../../../typings/shared";

type ExcludedPropKeys =
    | "aria-disabled"
    | "aria-haspopup"
    | "aria-expanded"
    | "className"
    | "onClick"
    | "onKeyDown"
    | "onMouseEnter"
    | "onMouseLeave"
    | "ref"
    | "tabIndex";

export interface MenuOptionProps extends Omit<ReactLIAttr, ExcludedPropKeys> {
    disabled?: boolean | undefined;
    indented?: boolean | undefined; // set by context menu parent component
    kind?: "danger" | "default" | undefined;
    label: string;
    level?: number | undefined; // set by context menu parent component
    onClick?(evt: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>): void;
    renderIcon?: React.ComponentType | undefined;
    shortcut?: React.ReactNode | undefined;
}

declare const MenuOption: React.FC<MenuOptionProps>;

export default MenuOption;
