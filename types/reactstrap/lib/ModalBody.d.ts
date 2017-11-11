import { CSSModule } from '../index';

export interface ModalBodyProps {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

export const ModalBody: React.StatelessComponent<ModalBodyProps>;
export default ModalBody;
