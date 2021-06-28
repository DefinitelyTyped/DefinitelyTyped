import * as React from "react";
import {
    Direction,
    MenuOffsetData,
    ReactAttr,
    ReactButtonAttr, ForwardRefReturn, VerticalDirection
} from "../../../typings/shared";

// NOTE: The index does not export * on this file because some non-default exports are not exported via the top-level index.
//       You'll need to export types manually in this directory's index file.

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
    size?: "sm" | "md" | "lg" | "xl",
}

declare class OverflowMenuComponent extends React.Component<OverflowMenuProps> { }
export { OverflowMenuComponent as OverflowMenu };

declare const OverflowMenu: ForwardRefReturn<HTMLButtonElement, OverflowMenuProps>;
export default OverflowMenu;
