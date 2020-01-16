import * as React from "react";
import { Direction, EmbeddedIconProps, MenuOffsetData, ReactAttr, ReactDivAttr, RenderIconProps } from "../../../typings/shared";

type ExcludedAttributes = "aria-expanded" | "aria-haspopup" | "aria-label" | "onBlur" | "onClick" | "onKeyDown" | "onKeyPress" | "role";
interface InheritedProps extends
    Omit<ReactDivAttr, ExcludedAttributes>,
    EmbeddedIconProps,
    RenderIconProps
{
    ariaLabel?: React.AriaAttributes["aria-label"],
    onClick?(e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>): void,
}

export type MenuOffsetValue = MenuOffsetData | ((menuBody: HTMLElement, direction: Direction, trigger?: HTMLElement, flip?: boolean) => (MenuOffsetData | undefined));

export interface OverflowMenuProps extends InheritedProps {
    direction?: Extract<Direction, "bottom" | "top">,
    iconClass?: ReactAttr["className"]
    flipped?: boolean,
    menuOffset?: MenuOffsetValue,
    menuOffsetFlip?: MenuOffsetValue,
    menuOptionsClass?: ReactAttr["className"],
    onClose?(): void,
    onOpen?(): void,
    open?: boolean,
}

declare const OverflowMenu: React.RefForwardingComponent<HTMLDivElement, OverflowMenuProps>;

export default OverflowMenu;
