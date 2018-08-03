import { CSSModule } from '../index';
import { ThemeColor } from "./Color";

export interface UncontrolledProps {
  className?: string;
  cssModule?: CSSModule;
  color?: ThemeColor;
  tag?: React.ReactType;
  transitionAppearTimeout?: number;
  transitionEnterTimeout?: number;
  transitionLeaveTimeout?: number;
}
export interface UncontrolledAlertProps extends UncontrolledProps {
  /* intentionally blank */
}

export interface AlertProps extends UncontrolledAlertProps {
  isOpen?: boolean;
  toggle?: () => void;
}

declare const Alert: React.StatelessComponent<AlertProps>;
export default Alert;
