export interface UncontrolledProps {
  className?: string;
  color?: string;
  tag?: React.ReactType;
  transitionAppearTimeout?: number;
  transitionEnterTimeout?: number;
  transitionLeaveTimeout?: number;
}

interface Props extends UncontrolledProps {
  isOpen?: boolean;
  toggle?: () => void;
}

declare var Alert: React.StatelessComponent<Props>;
export default Alert;