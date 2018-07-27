// @flow
import React, {
  Component,
  type Element as ReactElement,
  type ElementRef,
  type Node,
} from 'react';
import { css } from 'emotion';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import {
  animatedScrollTo,
  getBoundingClientObj,
  type RectType,
  getScrollParent,
  getScrollTop,
  scrollTo,
} from '../utils';
import { borderRadius, colors, spacing } from '../theme';
import type {
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
  menuEl: ElementRef<*>,
  minHeight: number,
  placement: 'bottom' | 'top' | 'auto',
  shouldScroll: boolean,
  isFixedPosition: boolean,
};

export function getMenuPlacement({
  maxHeight,
  menuEl,
  minHeight,
  placement,
  shouldScroll,
  isFixedPosition,
}: PlacementArgs): MenuState {
  const scrollParent = getScrollParent(menuEl);
  const defaultState = { placement: 'bottom', maxHeight };

  // something went wrong, return default state
  if (!menuEl || !menuEl.offsetParent) return defaultState;

  // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered
  const { height: scrollHeight } = scrollParent.getBoundingClientRect();
  const {
    bottom: menuBottom,
    height: menuHeight,
    top: menuTop,
  } = menuEl.getBoundingClientRect();

  // $FlowFixMe function returns above if there's no offsetParent
  const { top: containerTop } = menuEl.offsetParent.getBoundingClientRect();
  const viewHeight = window.innerHeight;
  const scrollTop = getScrollTop(scrollParent);
  const gutter = spacing.menuGutter;

  const viewSpaceAbove = containerTop - gutter;
  const viewSpaceBelow = viewHeight - menuTop;
  const scrollSpaceAbove = viewSpaceAbove + scrollTop;
  const scrollSpaceBelow = scrollHeight - scrollTop - menuTop;

  const scrollDown = menuBottom - viewHeight + scrollTop + gutter;
  const scrollUp = scrollTop + menuTop - gutter;
  const scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return { placement: 'bottom', maxHeight };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return { placement: 'bottom', maxHeight };
      }

      // 3: the menu will fit, if constrained
      if (
        (!isFixedPosition && scrollSpaceBelow >= minHeight) ||
        (isFixedPosition && viewSpaceBelow >= minHeight)
      ) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        const constrainedHeight = isFixedPosition
          ? viewSpaceBelow - gutter
          : scrollSpaceBelow - gutter;

        return {
          placement: 'bottom',
          maxHeight: constrainedHeight,
        };
      }

      // 4. Forked beviour when there isn't enough space below

      // AUTO: flip the menu, render above
      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        let constrainedHeight = maxHeight;

        if (
          (!isFixedPosition && scrollSpaceAbove >= minHeight) ||
          (isFixedPosition && viewSpaceAbove >= minHeight)
        ) {
          constrainedHeight = isFixedPosition
            ? viewSpaceAbove - gutter - spacing.controlHeight
            : scrollSpaceAbove - gutter - spacing.controlHeight;
        }

        return { placement: 'top', maxHeight: constrainedHeight };
      }

      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return { placement: 'bottom', maxHeight };
      }
      break;
    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return { placement: 'top', maxHeight };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return { placement: 'top', maxHeight };
      }

      // 3: the menu will fit, if constrained
      if (
        (!isFixedPosition && scrollSpaceAbove >= minHeight) ||
        (isFixedPosition && viewSpaceAbove >= minHeight)
      ) {
        let constrainedHeight = maxHeight;

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        if (
          (!isFixedPosition && scrollSpaceAbove >= minHeight) ||
          (isFixedPosition && viewSpaceAbove >= minHeight)
        ) {
          constrainedHeight = isFixedPosition
            ? viewSpaceAbove - gutter
            : scrollSpaceAbove - gutter;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: constrainedHeight,
        };
      }

      // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below
      return { placement: 'bottom', maxHeight };
    default:
      throw new Error(`Invalid placement provided "${placement}".`);
  }

  // fulfil contract with flow: implicit return value of undefined
  return defaultState;
}

// Menu Component
// ------------------------------

export type MenuProps = CommonProps & {
  /** The children to be rendered. */
  children: ReactElement<*>,
  /** Callback to update the portal after possible flip. */
  getPortalPlacement: MenuState => void,
  /** Props to be passed to the menu wrapper. */
  innerProps: Object,
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

function alignToControl(placement) {
  const placementToCSSProp = { bottom: 'top', top: 'bottom' };
  return placement ? placementToCSSProp[placement] : 'bottom';
}
const coercePlacement = p => (p === 'auto' ? 'bottom' : p);

export const menuCSS = ({ placement }: MenuState) => ({
  [alignToControl(placement)]: '100%',
  backgroundColor: colors.neutral0,
  borderRadius: borderRadius,
  boxShadow: `0 0 0 1px ${colors.neutral10a}, 0 4px 11px ${colors.neutral10a}`,
  marginBottom: spacing.menuGutter,
  marginTop: spacing.menuGutter,
  position: 'absolute',
  width: '100%',
  zIndex: 1,
});

export class Menu extends Component<MenuProps, MenuState> {
  state = {
    maxHeight: this.props.maxMenuHeight,
    placement: null,
  };
  static contextTypes = {
    getPortalPlacement: PropTypes.func,
  };
  getPlacement = (ref: ElementRef<*>) => {
    const {
      minMenuHeight,
      maxMenuHeight,
      menuPlacement,
      menuPosition,
      menuShouldScrollIntoView,
    } = this.props;
    const { getPortalPlacement } = this.context;

    if (!ref) return;

    // DO NOT scroll if position is fixed
    const isFixedPosition = menuPosition === 'fixed';
    const shouldScroll = menuShouldScrollIntoView && !isFixedPosition;

    const state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl: ref,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll,
      isFixedPosition,
    });

    if (getPortalPlacement) getPortalPlacement(state);

    this.setState(state);
  };
  getState = () => {
    const { menuPlacement } = this.props;
    const placement = this.state.placement || coercePlacement(menuPlacement);

    return { ...this.props, placement, maxHeight: this.state.maxHeight };
  };
  render() {
    const { children, className, cx, getStyles, innerProps } = this.props;

    return (
      <div
        className={cx(
          css(getStyles('menu', this.getState())),
          {
            'menu': true,
          },
          className
        )}
        ref={this.getPlacement}
        {...innerProps}
      >
        {children}
      </div>
    );
  }
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
export const menuListCSS = ({ maxHeight }: MenuState) => ({
  maxHeight,
  overflowY: 'auto',
  paddingBottom: spacing.baseUnit,
  paddingTop: spacing.baseUnit,
  position: 'relative', // required for offset[Height, Top] > keyboard scroll
  WebkitOverflowScrolling: 'touch',
});
export const MenuList = (props: MenuListComponentProps) => {
  const { children, className, cx, getStyles, isMulti, innerRef } = props;
  return (
    <div
      className={cx(
        css(getStyles('menuList', props)),
        {
          'menu-list': true,
          'menu-list--is-multi': isMulti
        },
        className
      )}
      ref={innerRef}
    >
      {children}
    </div>
  );
};

// ==============================
// Menu Notices
// ==============================

const noticeCSS = () => ({
  color: colors.neutral40,
  padding: `${spacing.baseUnit * 2}px ${spacing.baseUnit * 3}px`,
  textAlign: 'center',
});
export const noOptionsMessageCSS = noticeCSS;
export const loadingMessageCSS = noticeCSS;

export type NoticeProps = CommonProps & {
  /** The children to be rendered. */
  children: Node,
  /** Props to be passed on to the wrapper. */
  innerProps: { [string]: any },
};

export const NoOptionsMessage = (props: NoticeProps) => {
  const { children, className, cx, getStyles, innerProps } = props;
  return (
    <div
      className={cx(
        css(getStyles('noOptionsMessage', props)),
        {
          'menu-notice': true,
          'menu-notice--no-options': true,
        },
        className
      )}
      {...innerProps}
    >
      {children}
    </div>
  );
};
NoOptionsMessage.defaultProps = {
  children: 'No options',
};

export const LoadingMessage = (props: NoticeProps) => {
  const { children, className, cx, getStyles, innerProps } = props;
  return (
    <div
      className={cx(
        css(getStyles('loadingMessage', props)),
        {
          'menu-notice': true,
          'menu-notice--loading': true,
        },
        className
      )}
      {...innerProps}
    >
      {children}
    </div>
  );
};
LoadingMessage.defaultProps = {
  children: 'Loading...',
};

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

export const menuPortalCSS = ({ rect, offset, position }: PortalStyleArgs) => ({
  left: rect.left,
  position: position,
  top: offset,
  width: rect.width,
  zIndex: 1,
});

export class MenuPortal extends Component<MenuPortalProps, MenuPortalState> {
  state = { placement: null };
  static childContextTypes = {
    getPortalPlacement: PropTypes.func,
  };
  getChildContext() {
    return {
      getPortalPlacement: this.getPortalPlacement,
    };
  }

  // callback for occassions where the menu must "flip"
  getPortalPlacement = ({ placement }: MenuState) => {
    const initialPlacement = coercePlacement(this.props.menuPlacement);

    // avoid re-renders if the placement has not changed
    if (placement !== initialPlacement) {
      this.setState({ placement });
    }
  };
  render() {
    const {
      appendTo,
      children,
      controlElement,
      menuPlacement,
      menuPosition: position,
      getStyles,
    } = this.props;
    const isFixed = position === 'fixed';

    // bail early if required elements aren't present
    if ((!appendTo && !isFixed) || !controlElement) {
      return null;
    }

    const placement = this.state.placement || coercePlacement(menuPlacement);
    const rect = getBoundingClientObj(controlElement);
    const scrollDistance = isFixed ? 0 : window.pageYOffset;
    const offset = rect[placement] + scrollDistance;
    const state = { offset, position, rect };

    // same wrapper element whether fixed or portalled
    const menuWrapper = (
      <div
        className={css(getStyles('menuPortal', state))}
      >
        {children}
      </div>
    );

    return appendTo ? createPortal(menuWrapper, appendTo) : menuWrapper;
  }
}
