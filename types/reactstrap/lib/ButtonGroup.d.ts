import * as React from 'react';
import { CSSModule } from '../index';

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  role?: string;
  size?: string;
  vertical?: boolean;
}

declare class ButtonGroup<T = {[key: string]: any}> extends React.Component<ButtonGroupProps> {}
export default ButtonGroup;
