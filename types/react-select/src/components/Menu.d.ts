import { Component, ReactElement, Ref as ElementRef, ReactNode, ComponentType } from 'react';
import { createPortal } from 'react-dom';
import { CSSObject } from '@emotion/serialize';

import { animatedScrollTo, getBoundingClientObj, RectType, getScrollParent, getScrollTop, scrollTo } from '../utils';
import { borderRadius, colors, spacing } from '../theme';
import { InnerRef, MenuPlacement, MenuPosition, CommonProps, OptionTypeBase, GroupTypeBase } from '../types';

// ==============================
// Menu
// ==============================

// Get Menu Placement
// ------------------------------

export interface MenuState {
    placement: 'bottom' | 'top' | null;
    maxHeight: number;
}
export interface PlacementArgs {
    maxHeight: number;
    menuEl: ElementRef<any>;
    minHeight: number;
    placement: 'bottom' | 'top' | 'auto';
    shouldScroll: boolean;
    isFixedPosition: boolean;
}

export function getMenuPlacement(args: PlacementArgs): MenuState;

// Menu Component
// ------------------------------

export type MenuProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> & {
    /** The children to be rendered. */
    children: ReactElement;
    /** Callback to update the portal after possible flip. */
    getPortalPlacement: (state: MenuState) => void;
    /** Props to be passed to the menu wrapper. */
    innerProps: object;
    /** Reference to the internal element, consumed by the MenuPlacer component */
    innerRef: InnerRef;
    /** Set the maximum height of the menu. */
    maxMenuHeight: number;
    /** Set whether the menu should be at the top, at the bottom. The auto options sets it to bottom. */
    menuPlacement: MenuPlacement;
    /* The CSS position value of the menu, when "fixed" extra layout management is required */
    menuPosition: MenuPosition;
    /** Set the minimum height of the menu. */
    minMenuHeight: number;
    /** Set whether the page should scroll to show the menu. */
    menuShouldScrollIntoView: boolean;
};

export function menuCSS(state: MenuState): CSSObject;

declare function Menu<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: MenuProps<OptionType, IsMulti, GroupType>): ReactElement;

export default Menu;

// ==============================
// Menu List
// ==============================

interface MenuListState {
    /** Set classname for isMulti */
    isMulti: boolean;
    /* Set the max height of the Menu component  */
    maxHeight: number;
}

export interface MenuListProps {
    /** The children to be rendered. */
    children: ReactNode;
    /** Inner ref to DOM Node */
    innerRef: InnerRef;
}

// TODO: Remove this and merge it into `MenuListProps` so that naming pattern is adhered to.
export type MenuListComponentProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> & MenuListProps & MenuListState;

export function menuListCSS(state: MenuState): CSSObject;
export function MenuList<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: MenuListComponentProps<OptionType, IsMulti, GroupType>): ReactElement;

// ==============================
// Menu Notices
// ==============================

export function noOptionsMessageCSS(): CSSObject;
export function loadingMessageCSS(): CSSObject;

export type NoticeProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> & {
    /** The children to be rendered. */
    children: ReactNode;
    /** Props to be passed on to the wrapper. */
    innerProps: { [key: string]: any };
};

export function NoOptionsMessage<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: NoticeProps<OptionType, IsMulti, GroupType>): ReactElement;
// NoOptionsMessage.defaultProps = {
//   children: 'No options',
// };

export function LoadingMessage<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
    // tslint:disable-next-line:no-unnecessary-generics
>(props: NoticeProps<OptionType, IsMulti, GroupType>): ReactElement;
// LoadingMessage.defaultProps = {
//   children: 'Loading...',
// };

// ==============================
// Menu Portal
// ==============================

export type MenuPortalProps<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = CommonProps<OptionType, IsMulti, GroupType> & {
    appendTo: HTMLElement;
    children: ReactNode; // ideally Menu<MenuProps>
    controlElement: HTMLElement;
    menuPlacement: MenuPlacement;
    menuPosition: MenuPosition;
};
interface MenuPortalState {
    placement: 'bottom' | 'top' | null;
}
interface PortalStyleArgs {
    offset: number;
    position: MenuPosition;
    rect: RectType;
}

export function menuPortalCSS(args: PortalStyleArgs): CSSObject;

export class MenuPortal<
    OptionType extends OptionTypeBase,
    IsMulti extends boolean,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> extends Component<MenuPortalProps<OptionType, IsMulti, GroupType>, MenuPortalState> {
    // callback for occassions where the menu must "flip"
    getPortalPlacement: (state: MenuState) => void;
}
