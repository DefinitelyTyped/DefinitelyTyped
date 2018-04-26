import { CSSModule } from '../index';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  wrapTag?: React.ReactType;
  toggle?: () => void;
  [others: string]: any;
}

declare const ModalHeader: React.StatelessComponent<ModalHeaderProps>;
export default ModalHeader;
