import {
  Component,
  ReactElement,
  Ref as ElementRef,
  ReactNode as Node,
  ComponentType
} from 'react';
import { createPortal } from 'react-dom';
import * as PropTypes from 'prop-types';

import {
  animatedScrollTo,
  getBoundingClientObj,
  RectType,
  getScrollParent,
  getScrollTop,
  scrollTo,
} from '../utils';
import { borderRadius, colors, spacing } from '../theme';
import {
  InnerRef,
  MenuPlacement,
  MenuPosition,
  CommonProps,
} from '../types';

// ==============================
// Menu
// ==============================

// Get Menu Placement
// ------------------------------

type MenuState = { placement: 'bottom' | 'top' | null, maxHeight: number };
type PlacementArgs = {
  maxHeight: number,
  menuEl: ElementRef<any>,
  minHeight: number,
  placement: 'bottom' | 'top' | 'auto',
  shouldScroll: boolean,
  isFixedPosition: boolean,
};

export function getMenuPlacement(args: PlacementArgs): MenuState;

// Menu Component
// ------------------------------

export type MenuProps = CommonProps & {
  /** The children to be rendered. */
  children: ReactElement<any>,
  /** Callback to update the portal after possible flip. */
  getPortalPlacement: (state: MenuState) => void,
  /** Props to be passed to the menu wrapper. */
  innerProps: object,
  /** Set the maximum height of the menu. */
  maxMenuHeight: number,
  /** Set whether the menu should be at the top, at the bottom. The auto options sets it to bottom. */
  menuPlacement: MenuPlacement,
  /* The CSS position value of the menu, when "fixed" extra layout management is required */
  menuPosition: MenuPosition,
  /** Set the minimum height of the menu. */
  minMenuHeight: number,
  /** Set whether the page should scroll to show the menu. */
  menuShouldScrollIntoView: boolean,
};

export function menuCSS(state: MenuState): any; // TODO css type

export class Menu extends Component<MenuProps, MenuState> {
  static contextTypes: {
    getPortalPlacement: (state: MenuState) => void,
  };
  getPlacement: (ref: ElementRef<any>) => void;
  getState: () => MenuProps & MenuState;
}

export default Menu;

// ==============================
// Menu List
// ==============================

type MenuListState = {
  /** Set classname for isMulti */
  isMulti: boolean,
  /* Set the max height of the Menu component  */
  maxHeight: number,
};

export type MenuListProps = {
  /** The children to be rendered. */
  children: Node,
  /** Inner ref to DOM Node */
  innerRef: InnerRef,
};
export type MenuListComponentProps = CommonProps &
  MenuListProps &
  MenuListState;
export function menuListCSS(state: MenuState): any; // TODO css type
export const MenuList: ComponentType<MenuListComponentProps>;

// ==============================
// Menu Notices
// ==============================

export function noOptionsMessageCSS(): any; // TODO css type
export function loadingMessageCSS(): any; // TODO css type

export type NoticeProps = CommonProps & {
  /** The children to be rendered. */
  children: Node,
  /** Props to be passed on to the wrapper. */
  innerProps: { [key: string]: any },
};

export const NoOptionsMessage: ComponentType<NoticeProps>;
// NoOptionsMessage.defaultProps = {
//   children: 'No options',
// };

export const LoadingMessage: ComponentType<NoticeProps>;
// LoadingMessage.defaultProps = {
//   children: 'Loading...',
// };

// ==============================
// Menu Portal
// ==============================

export type MenuPortalProps = CommonProps & {
  appendTo: HTMLElement,
  children: Node, // ideally Menu<MenuProps>
  controlElement: HTMLElement,
  menuPlacement: MenuPlacement,
  menuPosition: MenuPosition,
};
type MenuPortalState = {
  placement: 'bottom' | 'top' | null,
};
type PortalStyleArgs = {
  offset: number,
  position: MenuPosition,
  rect: RectType,
};

export function menuPortalCSS(args: PortalStyleArgs): any; // TODO css type

export class MenuPortal extends Component<MenuPortalProps, MenuPortalState> {
  static childContextTypes: {
    getPortalPlacement: (state: MenuState) => void,
  };
  getChildContext(): {
    getPortalPlacement: (state: MenuState) => void;
  };

  // callback for occassions where the menu must "flip"
  getPortalPlacement: (state: MenuState) => void;
}
