import { CSSModule } from '../index';

export interface UncontrolledAlertProps {
  className?: string;
  cssModule?: CSSModule;
  color?: string;
  tag?: React.ReactType;
  transitionAppearTimeout?: number;
  transitionEnterTimeout?: number;
  transitionLeaveTimeout?: number;
}

export interface AlertProps extends UncontrolledAlertProps {
  isOpen?: boolean;
  toggle?: () => void;
}

export const Alert: React.StatelessComponent<AlertProps>;
export default Alert;
