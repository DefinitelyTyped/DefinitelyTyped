import * as React from 'react';
import { CSSModule } from '../index';
import { FadeProps } from './Fade';

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
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
}

declare class Modal extends React.Component<ModalProps> {}
export default Modal;
