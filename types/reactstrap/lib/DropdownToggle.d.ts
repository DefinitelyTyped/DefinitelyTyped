import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type DropdownToggleProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  caret?: boolean;
  className?: string;
  cssModule?: CSSModule;
  disabled?: boolean;
  onClick?: ReactDOM.MouseEventHandler<any>;
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
