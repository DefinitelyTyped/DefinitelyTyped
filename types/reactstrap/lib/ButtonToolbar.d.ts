import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type ButtonToolbarProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  role?: string;
} & T;

declare class ButtonToolbar<T = {[key: string]: any}> extends React.Component<ButtonToolbarProps<T>> {}
export default ButtonToolbar;
