import { CSSModule } from '../index';

export interface UncontrolledProps {
  className?: string;
  cssModule?: CSSModule;
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
