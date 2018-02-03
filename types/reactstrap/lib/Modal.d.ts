import { CSSModule } from '../index';

export interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  isOpen?: boolean;
  autoFocus?: boolean;
  size?: string;
  toggle?: () => void;
  keyboard?: boolean;
  backdrop?: boolean | 'static';
  onEnter?: () => void;
  onExit?: () => void;
  className?: string;
  cssModule?: CSSModule;
  wrapClassName?: string;
  modalClassName?: string;
  backdropClassName?: string;
  contentClassName?: string;
  zIndex?: number | string;
  fade?: boolean;
}

declare const Modal: React.StatelessComponent<ModalProps>;
export default Modal;
