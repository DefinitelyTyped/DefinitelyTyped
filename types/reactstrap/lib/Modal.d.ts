import * as React from 'react';
import { CSSModule } from '../index';
import { FadeProps } from './Fade';

export type ModalProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  isOpen?: boolean;
  autoFocus?: boolean;
  size?: string;
  toggle?: () => void;
  keyboard?: boolean;
  backdrop?: boolean | 'static';
  onEnter?: () => void;
  onExit?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
  className?: string;
  cssModule?: CSSModule;
  wrapClassName?: string;
  modalClassName?: string;
  backdropClassName?: string;
  contentClassName?: string;
  zIndex?: number | string;
  fade?: boolean;
  backdropTransition?: FadeProps;
  modalTransition?: FadeProps;
  centered?: boolean;
  external?: React.ReactNode;
  labelledBy?: string;
  role?: string;
} & T;

declare class Modal<T> extends React.Component<ModalProps<T>> {}
export default Modal;
