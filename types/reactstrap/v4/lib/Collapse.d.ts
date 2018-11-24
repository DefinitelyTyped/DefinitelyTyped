import { CommonProps } from '../index';

interface Props extends CommonProps, React.ComponentPropsWithoutRef<'div'> {
  isOpen?: boolean;
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
