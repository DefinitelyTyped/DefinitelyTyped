import * as React from "react";
import { Direction, MenuOffsetData, TooltipAlignment, ReactDivAttr, ForwardRefReturn } from "../../../typings/shared";

// NOTE: The index does not export * on this file because non-default export of Tooltip clashs with Tooltip at the top-level index.
//       You'll need to export types manually in this directory's index file.

type ExcludedAttributes = "onBlur" | "onChange" | "onContextMenu" | "onFocus" | "onMouseOut" | "onMouseOver" | "role";
export type TooltipOnChangeEvent<T extends Element> = React.FocusEvent<T> | React.KeyboardEvent<T> | React.MouseEvent<T>;

export interface TooltipProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    align?: TooltipAlignment | undefined;
    autoOrientation?: boolean | undefined;
    defaultOpen?: boolean | undefined;
    direction?: Direction | undefined;
    focusTrap?: boolean | undefined;
    iconDescription?: string | undefined;
    iconName?: string | undefined;
    menuOffset?:
        MenuOffsetData
        | ((menuBody: HTMLElement, menuDirection: TooltipProps['direction']) => Required<MenuOffsetData> | undefined) | undefined;
    onChange?(event: TooltipOnChangeEvent<HTMLDivElement>, data: { open: boolean }): void; // optional/required depending on static carbon lib config
    open?: boolean | undefined;
    renderIcon?: ForwardRefReturn<unknown, unknown> | undefined;
    selectorPrimaryFocus?: string | undefined;
    showIcon?: boolean | undefined;
    tooltipBodyId?: string | undefined;
    tooltipId?: string | undefined;
    triggerClassName?: string | undefined;
    triggerId?: string | undefined;
    triggerText?: React.ReactNode | undefined;
}

declare class TooltipComponent extends React.Component<TooltipProps> { }
export { TooltipComponent as Tooltip };

declare const Tooltip: ForwardRefReturn<unknown, TooltipProps>;
export default Tooltip;
