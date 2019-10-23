import { CSSModule } from '../index';

interface Props extends React.HTMLProps<HTMLElement> {
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

declare var Collapse: React.StatelessComponent<Props>;
export default Collapse;
