import { CSSModule } from '../index';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  [others: string]: any;
}

declare const ModalFooter: React.StatelessComponent<ModalFooterProps>;
export default ModalFooter;
