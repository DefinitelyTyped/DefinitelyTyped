interface Props extends React.HTMLProps<HTMLElement> {
  isOpen?: boolean;
  classNames?: string;
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