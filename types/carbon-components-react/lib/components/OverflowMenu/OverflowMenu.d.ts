import * as React from "react";
import {
    Direction,
    MenuOffsetData,
    ReactAttr,
    ReactButtonAttr, ForwardRefReturn, VerticalDirection
} from "../../../typings/shared";

type GetMenuOffsetFn = ((menuBody: HTMLElement, direction: Direction, trigger?: HTMLElement, flip?: boolean) => (MenuOffsetData | undefined));
export declare const getMenuOffset: GetMenuOffsetFn;

export type MenuOffsetValue = MenuOffsetData | GetMenuOffsetFn;

type ExcludedAttributes = "aria-expanded" | "aria-haspopup" | "aria-label" | "onClick" | "onKeyDown" | "type";
export interface OverflowMenuProps extends Omit<ReactButtonAttr, ExcludedAttributes> {
    ariaLabel?: string,
    direction?: VerticalDirection,
    iconClass?: ReactAttr["className"],
    iconDescription?: string,
    flipped?: boolean,
    light?: boolean,
    menuOffset?: MenuOffsetValue,
    menuOffsetFlip?: MenuOffsetValue,
    menuOptionsClass?: ReactAttr["className"],
    onClick?(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>): void,
    onClose?(): void,
    onOpen?(): void,
    open?: boolean,
    renderIcon?: any,
    selectorPrimaryFocus?: string,
    size?: "sm" | "xl",
}

declare const OverflowMenu: ForwardRefReturn<HTMLButtonElement, OverflowMenuProps>;

export default OverflowMenu;
