import * as React from 'react';
import { CSSModule } from '../index';

export type UncontrolledProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  cssModule?: CSSModule;
  color?: string;
  tag?: React.ReactType;
  transitionAppearTimeout?: number;
  transitionEnterTimeout?: number;
  transitionLeaveTimeout?: number;
} & T;
export type UncontrolledAlertProps<T = {}> = UncontrolledProps<T>;

export type AlertProps<T = {}> = UncontrolledAlertProps<T> & {
  isOpen?: boolean;
  toggle?: () => void;
};

declare class Alert<T = {}> extends React.Component<AlertProps<T>> {}
export default Alert;
