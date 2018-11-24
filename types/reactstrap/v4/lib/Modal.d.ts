import { CommonProps } from '../index';

interface Props extends Pick<CommonProps, Exclude<keyof CommonProps, 'tag'>> {
  isOpen?: boolean;
  autoFocus?: boolean;
  size?: string;
  toggle?: () => void;
  keyboard?: boolean;
  backdrop?: boolean | 'static';
  onEnter?: () => void;
  onExit?: () => void;
  wrapClassName?: string;
  modalClassName?: string;
  backdropClassName?: string;
  contentClassName?: string;
  zIndex?: number | string;
  fade?: boolean;
}

declare var Modal: React.StatelessComponent<Props>;
export default Modal;
