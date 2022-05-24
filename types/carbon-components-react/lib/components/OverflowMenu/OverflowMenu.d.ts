import * as React from 'react';
import {
    Direction,
    MenuOffsetData,
    ReactAttr,
    ReactButtonAttr,
    ForwardRefReturn,
    VerticalDirection,
} from '../../../typings/shared';
import { MenuProps } from '../Menu/Menu';

// NOTE: The index does not export * on this file because some non-default exports are not exported via the top-level index.
//       You'll need to export types manually in this directory's index file.

type GetMenuOffsetFn = (
    menuBody: HTMLElement,
    direction: Direction,
    trigger?: HTMLElement,
    flip?: boolean,
) => MenuOffsetData | undefined;
export declare const getMenuOffset: GetMenuOffsetFn;

export type MenuOffsetValue = MenuOffsetData | GetMenuOffsetFn;

type ExcludedAttributes = 'aria-expanded' | 'aria-haspopup' | 'aria-label' | 'onClick' | 'onKeyDown' | 'type';
export interface OverflowMenuProps extends Omit<ReactButtonAttr, ExcludedAttributes> {
    ariaLabel?: string | undefined;
    direction?: VerticalDirection | undefined;
    iconClass?: ReactAttr['className'] | undefined;
    iconDescription?: string | undefined;
    flipped?: boolean | undefined;
    focusTrap?: boolean | undefined;
    /**
     * @deprecated The `light` prop for `OverflowMenu` is no longer needed and has been deprecated. It will be removed in the next major release. Use the Layer component instead.
     */
    light?: boolean | undefined;
    menuOffset?: MenuOffsetValue | undefined;
    menuOffsetFlip?: MenuOffsetValue | undefined;
    menuOptionsClass?: ReactAttr['className'] | undefined;
    onClick?(event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>): void;
    onClose?(): void;
    onOpen?(): void;
    open?: boolean | undefined;
    renderIcon?: any;
    selectorPrimaryFocus?: string | undefined;
    size?: MenuProps['size'];
}

declare class OverflowMenuComponent extends React.Component<OverflowMenuProps> {}
export { OverflowMenuComponent as OverflowMenu };

declare const OverflowMenu: ForwardRefReturn<HTMLButtonElement, OverflowMenuProps>;
export default OverflowMenu;
