import * as React from "react";
import { Direction, EmbeddedIconProps, MenuOffsetData, ReactDivAttr } from "../../../typings/shared";

type ExcludedAttributes = "aria-labelledby" | "onBlur" | "onContextMenu" | "onFocus" | "onMouseOut" | "onMouseOver" | "role";
interface InheritedProps extends
    Omit<ReactDivAttr, ExcludedAttributes>,
    EmbeddedIconProps
{ }

export interface TooltipProps extends InheritedProps {
    direction?: Direction,
    iconDescription?: string,
    iconName?: string,
    menuOffset?: MenuOffsetData | ((menuBody: HTMLElement, menuDirection: TooltipProps["direction"]) => Required<MenuOffsetData> | undefined)
    open?: boolean,
    renderIcon?: React.RefForwardingComponent<any, any>,
    showIcon?: boolean,
    triggerClassName?: string,
    triggerText?: React.ReactNode,
}

declare const Tooltip: React.RefForwardingComponent<any, TooltipProps>;

export default Tooltip;
