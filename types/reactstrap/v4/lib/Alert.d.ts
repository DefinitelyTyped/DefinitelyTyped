import { CommonProps } from '../index';

export interface UncontrolledProps extends CommonProps {
  color?: string;
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
