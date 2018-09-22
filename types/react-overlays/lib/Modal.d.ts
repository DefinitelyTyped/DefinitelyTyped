import * as React from 'react';
import { TransitionCallbacks } from 'react-overlays';
import { TransitionProps } from 'react-transition-group/Transition';
import * as ModalManager from './ModalManager';
import { PortalProps } from './Portal';

declare class Modal extends React.Component<ModalProps> {
  public static Manager: ModalManager;
}
declare namespace Modal { }
export = Modal;

interface ModalProps extends TransitionCallbacks, PortalProps {
  className?: string;

  /**
   * Set the visibility of the Modal
   */
  show?: boolean;

  /**
   * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container?: React.ReactNode | Function;

  /**
   * A callback fired when the Modal is opening.
   */
  onShow?: Function;

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide?: Function;

  /**
   * Include a backdrop component.
   */
  backdrop?: boolean | 'static';

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop?(props: any): React.ReactNode;

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   */
  onEscapeKeyUp?: Function;

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick?: Function;

  /**
   * A style object for the backdrop component.
   */
  backdropStyle?: Object;

  /**
   * A css class or classes for the backdrop component.
   */
  backdropClassName?: string;

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName?: string;

  /**
   * Close the modal when escape key is pressed
   */
  keyboard?: boolean;

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition?: React.ComponentType<TransitionProps>;

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition?: React.ComponentType<TransitionProps>;

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus?: boolean;

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus?: boolean;

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus?: boolean;

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager?: ModalManager;
}
