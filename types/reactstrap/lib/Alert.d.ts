import * as React from 'react';
import { CSSModule } from '../index';
import { FadeProps } from './Fade';

export type UncontrolledProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  cssModule?: CSSModule;
  color?: string;
  tag?: React.ReactType;
  transition?: FadeProps;
} & T;
export type UncontrolledAlertProps<T = {}> = UncontrolledProps<T>;

export type AlertProps<T = {}> = UncontrolledAlertProps<T> & {
  isOpen?: boolean;
  toggle?: () => void;
};

declare class Alert<T = {[key: string]: any}> extends React.Component<AlertProps<T>> {}
export default Alert;
