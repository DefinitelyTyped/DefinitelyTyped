import { CSSModule } from '../index';

export interface CollapseProps extends React.HTMLProps<HTMLElement> {
  isOpen?: boolean;
  classNames?: string;
  cssModule?: CSSModule;
  tag?: React.ReactType;
  navbar?: boolean;
  delay?: {
    show: number
    hide: number
  };
  onOpened?: () => void;
  onClosed?: () => void;
}

export const Collapse: React.StatelessComponent<CollapseProps>;
export default Collapse;
