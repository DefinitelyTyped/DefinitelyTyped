import { CSSModule } from '../index';

export interface ModalHeaderProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  wrapTag?: React.ReactType;
  toggle?: () => void;
}

export const ModalHeader: React.StatelessComponent<ModalHeaderProps>;
export default ModalHeader;
