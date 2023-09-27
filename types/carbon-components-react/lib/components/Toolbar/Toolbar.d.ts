import * as React from "react";
import { ForwardRefReturn, ReactAttr, ReactDivAttr } from "../../../typings/shared";

// Toolbar

interface ToolbarInheritedProps extends ReactDivAttr {}

/**
 * @deprecated
 */
export interface ToolbarProps extends ToolbarInheritedProps {}

/**
 * @deprecated
 */
declare const Toolbar: React.FC<ToolbarProps>;

// ToolbarItem

interface ToolbarItemInheritedProps {
    children?: ReactAttr["children"] | undefined;
}

/**
 * @deprecated
 */
export interface ToolbarItemProps extends ToolbarItemInheritedProps {
    placeholderText?: string | undefined;
    type?: string | undefined;
}

/**
 * @deprecated
 */
export declare const ToolbarItem: React.FC<ToolbarItemProps>;

// ToolbarTitle

/**
 * @deprecated
 */
export interface ToolbarTitleProps {
    title?: string | undefined;
}

/**
 * @deprecated
 */
export declare const ToolbarTitle: ForwardRefReturn<HTMLLIElement, ToolbarTitleProps>;

// ToolbarOption

interface ToolbarOptionInheritedProps {
    children?: ReactAttr["children"] | undefined;
}

/**
 * @deprecated
 */
export interface ToolbarOptionProps extends ToolbarOptionInheritedProps {}

/**
 * @deprecated
 */
export declare const ToolbarOption: ForwardRefReturn<HTMLLIElement, ToolbarOptionProps>;

// ToolbarDivider

/**
 * @deprecated
 */
export declare const ToolbarDivider: ForwardRefReturn<HTMLHRElement>;

export default Toolbar;
