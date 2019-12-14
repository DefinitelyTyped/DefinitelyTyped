import * as React from "react";
import { Direction, EmbeddedIconProps, MenuOffsetData, ReactAttr, ReactDivAttr } from "../../../typings/shared";

type ExcludedAttributes = "onBlur" | "onChange" | "onContextMenu" | "onFocus" | "onMouseOut" | "onMouseOver" | "role";
interface InheritedProps extends
    Omit<ReactDivAttr, ExcludedAttributes>,
    EmbeddedIconProps
{ }

type TooltipOnChangeEvent<T extends Element> = React.FocusEvent<T> | React.KeyboardEvent<T> | React.MouseEvent<T>;
export interface TooltipProps extends InheritedProps {
    defaultOpen?: boolean;
    direction?: Direction;
    iconName?: string;
    menuOffset?:
        MenuOffsetData
        | ((menuBody: HTMLElement, menuDirection: TooltipProps['direction']) => Required<MenuOffsetData> | undefined);
    onChange?(event: TooltipOnChangeEvent<HTMLDivElement>, data: { open: boolean }): void; // optional/required depending on static carbon lib config
    open?: boolean;
    renderIcon?: React.RefForwardingComponent<any, any>;
    showIcon?: boolean;
    tooltipId?: ReactAttr['id'];
    triggerClassName?: ReactAttr['className'];
    triggerId?: ReactAttr['id'];
    triggerText?: React.ReactNode;
}

declare const Tooltip: React.RefForwardingComponent<any, TooltipProps>;

export default Tooltip;
