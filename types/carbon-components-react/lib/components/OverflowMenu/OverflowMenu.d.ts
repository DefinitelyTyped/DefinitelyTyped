import * as React from "react";
import {
    Direction,
    EmbeddedIconProps,
    MenuOffsetData,
    ReactAttr,
    RenderIconProps,
    ReactButtonAttr, ThemeProps, ForwardRefReturn
} from "../../../typings/shared";

type GetMenuOffsetFn = ((menuBody: HTMLElement, direction: Direction, trigger?: HTMLElement, flip?: boolean) => (MenuOffsetData | undefined));
export declare const getMenuOffset: GetMenuOffsetFn;

type ExcludedAttributes = "aria-expanded" | "aria-haspopup" | "aria-label" | "onBlur" | "onClick" | "onKeyDown" | "onKeyPress" | "role";
interface InheritedProps extends
    Omit<ReactButtonAttr, ExcludedAttributes>,
    EmbeddedIconProps,
    RenderIconProps,
    ThemeProps
{
    ariaLabel?: React.AriaAttributes["aria-label"],
    onClick?(e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>): void,
}

export type MenuOffsetValue = MenuOffsetData | GetMenuOffsetFn;

export interface OverflowMenuProps extends InheritedProps {
    direction?: Extract<Direction, "bottom" | "top">,
    iconClass?: ReactAttr["className"],
    flipped?: boolean,
    menuOffset?: MenuOffsetValue,
    menuOffsetFlip?: MenuOffsetValue,
    menuOptionsClass?: ReactAttr["className"],
    onClose?(): void,
    onOpen?(): void,
    open?: boolean,
}

declare const OverflowMenu: ForwardRefReturn<HTMLButtonElement, OverflowMenuProps>;

export default OverflowMenu;
