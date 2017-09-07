import * as React from 'react';
import { Sizes, TransitionCallbacks } from 'react-bootstrap';
import * as ModalBody from './ModalBody';
import * as ModalHeader from './ModalHeader';
import * as ModalTitle from './ModalTitle';
import * as ModalDialog from './ModalDialog';
import * as ModalFooter from './ModalFooter';

declare class Modal extends React.Component<ModalProps> {
  public static Body: typeof ModalBody;
  public static Header: typeof ModalHeader;
  public static Title: typeof ModalTitle;
  public static Footer: typeof ModalFooter;
  public static Dialog: typeof ModalDialog;
}
declare namespace Modal { }
export = Modal

interface ModalProps extends TransitionCallbacks, React.HTMLProps<Modal> {
  // Required
  onHide: Function;

  // Optional
  animation?: boolean;
  autoFocus?: boolean;
  backdrop?: boolean | string;
  backdropClassName?: string;
  backdropStyle?: any;
  backdropTransitionTimeout?: number;
  bsSize?: Sizes;
  container?: any; // TODO: Add more specific type
  containerClassName?: string;
  dialogClassName?: string;
  dialogComponent?: any; // TODO: Add more specific type
  dialogTransitionTimeout?: number;
  enforceFocus?: boolean;
  keyboard?: boolean;
  onBackdropClick?: (node: HTMLElement) => any;
  onEscapeKeyUp?: (node: HTMLElement) => any;
  onShow?: (node: HTMLElement) => any;
  show?: boolean;
  transition?: React.ReactElement<any>;
}
