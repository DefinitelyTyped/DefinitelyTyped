import * as React from 'react';
import { CSSModule } from '../index';

export type ButtonGroupProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  'aria-label'?: string;
  className?: string;
  cssModule?: CSSModule;
  role?: string;
  size?: string;
  vertical?: boolean;
} & T;

declare class ButtonGroup<T = {[key: string]: any}> extends React.Component<ButtonGroupProps<T>> {}
export default ButtonGroup;
