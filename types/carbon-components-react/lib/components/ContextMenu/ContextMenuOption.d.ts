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

export interface ContextMenuOptionProps extends Omit<ReactLIAttr, ExcludedPropKeys> {
    disabled?: boolean;
    indented?: boolean; // set by context menu parent component
    kind?: "danger" | "default";
    label: string;
    level?: number; // set by context menu parent component
    onClick?(evt: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>): void;
    renderIcon?: React.ComponentType;
    shortcut?: React.ReactNode;
}

declare const ContextMenuOption: React.FC<ContextMenuOptionProps>;

export default ContextMenuOption;
