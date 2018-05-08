import { CSSModule } from '../index';

export interface UncontrolledProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  cssModule?: CSSModule;
  color?: string;
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
