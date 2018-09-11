import * as React from 'react';
import { CSSModule } from '../index';

export type DropdownToggleProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  caret?: boolean;
  className?: string;
  cssModule?: CSSModule;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<any>;
  outline?: boolean;
  'data-toggle'?: string;
  'aria-haspopup'?: boolean;
  split?: boolean;
  tag?: React.ReactType;
  nav?: boolean;
  color?: string;
  size?: string;
} & T;

declare class DropdownToggle<T> extends React.Component<DropdownToggleProps<T>> {}
export default DropdownToggle;
