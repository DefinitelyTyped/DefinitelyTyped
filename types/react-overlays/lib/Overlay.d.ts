import * as React from 'react';
import { TransitionCallbacks } from 'react-overlays';
import { TransitionProps } from 'react-transition-group/Transition';
import { PortalProps } from './Portal';
import { PositionProps } from './Position';

declare class Overlay extends React.Component<OverlayProps> { }
declare namespace Overlay { }
export = Overlay;

interface OverlayProps extends TransitionCallbacks, PortalProps, PositionProps {
  /**
   * Set the visibility of the Overlay
   */
  show?: boolean;

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose?: boolean;

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   */
  onHide?(props: PortalProps, ...args: any[]): any;

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  transition?: React.ComponentType<TransitionProps>;
}
