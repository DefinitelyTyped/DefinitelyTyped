// Type definitions for React Overlays 0.6
// Project: https://github.com/react-bootstrap/react-overlays
// Definitions by: Aaron Beall <https://github.com/aaronbeall>
//                 Vito Samson <https://github.com/vitosamson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export {
  Affix,
  AutoAffix,
  Modal,
  ModalManager,
  Overlay,
  Portal,
  Position,
  RootCloseWrapper,
} from './lib';

// these callbacks are used in a few components
export interface TransitionCallbacks {
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter?(node: HTMLElement): any;

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering?(node: HTMLElement): any;

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered?(node: HTMLElement): any;

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit?(node: HTMLElement): any;

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting?(node: HTMLElement): any;

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited?(node: HTMLElement): any;
}
