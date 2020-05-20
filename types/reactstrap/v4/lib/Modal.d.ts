import { CSSModule } from '../index';

interface Props {
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

declare var Modal: React.StatelessComponent<Props>;
export default Modal;
