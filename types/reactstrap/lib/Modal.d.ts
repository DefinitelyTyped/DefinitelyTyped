import { CSSModule } from '../index';
import { FadeProps } from './Fade';

export interface ModalProps {
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
}

declare const Modal: React.StatelessComponent<ModalProps>;
export default Modal;
