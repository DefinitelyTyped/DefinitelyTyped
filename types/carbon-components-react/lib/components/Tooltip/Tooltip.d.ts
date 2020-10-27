import * as React from "react";
import { Direction, MenuOffsetData, ReactDivAttr, ForwardRefReturn } from "../../../typings/shared";

type ExcludedAttributes = "onBlur" | "onChange" | "onContextMenu" | "onFocus" | "onMouseOut" | "onMouseOver" | "role";
type TooltipOnChangeEvent<T extends Element> = React.FocusEvent<T> | React.KeyboardEvent<T> | React.MouseEvent<T>;

export interface TooltipProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    defaultOpen?: boolean;
    direction?: Direction;
    focusTrap?: boolean;
    iconDescription?: string;
    iconName?: string;
    menuOffset?:
        MenuOffsetData
        | ((menuBody: HTMLElement, menuDirection: TooltipProps['direction']) => Required<MenuOffsetData> | undefined);
    onChange?(event: TooltipOnChangeEvent<HTMLDivElement>, data: { open: boolean }): void; // optional/required depending on static carbon lib config
    open?: boolean;
    renderIcon?: ForwardRefReturn<unknown, unknown>;
    selectorPrimaryFocus?: string;
    showIcon?: boolean;
    tooltipBodyId?: string;
    tooltipId?: string;
    triggerClassName?: string;
    triggerId?: string;
    triggerText?: React.ReactNode;
}

declare const Tooltip: ForwardRefReturn<unknown, TooltipProps>;

export default Tooltip;
