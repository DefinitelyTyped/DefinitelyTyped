import { CSSModule } from '../index';

export interface ModalFooterProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const ModalFooter: React.StatelessComponent<ModalFooterProps>;
export default ModalFooter;
