import * as React from "react";
import { ReactAttr, ReactDivAttr, ForwardRefReturn } from "../../../typings/shared";

// Toolbar

interface ToolbarInheritedProps extends ReactDivAttr { }

export interface ToolbarProps extends ToolbarInheritedProps { }

declare const Toolbar: React.FC<ToolbarProps>;

// ToolbarItem

interface ToolbarItemInheritedProps {
    children?: ReactAttr["children"],
}

export interface ToolbarItemProps extends ToolbarItemInheritedProps {
    placeholderText?: string,
    type?: string,
}

export declare const ToolbarItem: React.FC<ToolbarItemProps>;

// ToolbarTitle

export interface ToolbarTitleProps {
    title?: string,
}

export declare const ToolbarTitle: ForwardRefReturn<HTMLLIElement, ToolbarTitleProps>;

// ToolbarOption

interface ToolbarOptionInheritedProps {
    children?: ReactAttr["children"],
}

export interface ToolbarOptionProps extends ToolbarOptionInheritedProps { }

export declare const ToolbarOption: ForwardRefReturn<HTMLLIElement, ToolbarOptionProps>;

// ToolbarDivider

export declare const ToolbarDivider: ForwardRefReturn<HTMLHRElement>;

export default Toolbar;
