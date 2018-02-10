// Type definitions for react-native-drawer-layout 1.3
// Project: https://github.com/react-native-community/react-native-drawer-layout
// Definitions by: Justin Firth <https://github.com/jmfirth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { ViewProperties } from 'react-native';

export type DrawerLayoutOpenEventHandler = () => void;

export type DrawerLayoutCloseEventHandler = () => void;

export interface DrawerLayoutSlideEvent {
  nativeEvent: {
    offset: number;
  };
}

export type DrawerLayoutSlideEventHandler = (event: DrawerLayoutSlideEvent) => void;

export type DrawerLayoutStateChangeEventHandler = (state: string) => void;

export interface DrawerLayoutProperties extends ViewProperties {
  /**
   * Child content.
   */
  children?: React.ReactNode;
  /**
   * Specifies the background color of the drawer. The default value is white. If you want to set
   * the opacity of the drawer, use rgba.
   */
  drawerBackgroundColor?: string;
  /**
   * Specifies the lock mode of the drawer. The drawer can be locked in 3 states:
   *
   * - unlocked (default), meaning that the drawer will respond (open/close) to touch gestures.
   * - locked-closed, meaning that the drawer will stay closed and not respond to gestures.
   * - locked-open, meaning that the drawer will stay opened and not respond to gestures.
   *
   * The drawer may still be opened and closed programmatically (`openDrawer`/`closeDrawer`).
   */
  drawerLockMode?: 'unlocked' | 'locked-closed' | 'locked-open';
  /**
   * Specifies the side of the screen from which the drawer will slide in.
   */
  drawerPosition: 'left' | 'right';
  /**
   * Specifies the width of the drawer, more precisely the width of the view that be pulled in from
   * the edge of the window.
   */
  drawerWidth: number;
  /**
   * Determines whether the keyboard gets dismissed in response to a drag.
   *
   * - 'none' (the default), drags do not dismiss the keyboard.
   * - 'on-drag', the keyboard is dismissed when a drag begins.
   */
  keyboardDismissMode?: 'none' | 'on-drag';
  /**
   * Function called whenever the navigation view has been closed.
   */
  onDrawerClose?: DrawerLayoutCloseEventHandler;
  /**
   * Function called whenever the navigation view has been opened.
   */
  onDrawerOpen?: DrawerLayoutOpenEventHandler;
  /**
   * Function called whenever there is an interaction with the navigation view.
   */
  onDrawerSlide?: DrawerLayoutSlideEventHandler;
  /**
   * Function called when the drawer state has changed. The drawer can be in 3 states:
   *
   * - idle, meaning there is no interaction with the navigation view happening at the time
   * - dragging, meaning there is currently an interaction with the navigation view
   * - settling, meaning that there was an interaction with the navigation view, and the navigation
   *   view is now finishing its closing or opening animation
   */
  onDrawerStateChanged?: DrawerLayoutStateChangeEventHandler;
  /**
   * The navigation view that will be rendered to the side of the screen and can be pulled in.
   */
  renderNavigationView: React.ReactNode;
  /**
   * Make the drawer take the entire screen and draw the background of the status bar to allow it
   * to open over the status bar. It will only have an effect on API 21+.
   */
  statusBarBackgroundColor?: string;
  /**
   * Use native driver animations.
   */
  useNativeAnimations?: boolean;
}

export default class DrawerLayout extends React.Component<DrawerLayoutProperties> {
    static positions: {
        Left: "left";
        Right: "right";
    };
    /**
     * Opens the drawer.
     */
    openDrawer(): void;
    /**
     * Closes the drawer.
     */
    closeDrawer(): void;
}
