import * as React from 'react';
import { CSSModule } from '../index';

export type ButtonToolbarProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  role?: string;
} & T;

declare class ButtonToolbar<T = {[key: string]: any}> extends React.Component<ButtonToolbarProps<T>> {}
export default ButtonToolbar;
