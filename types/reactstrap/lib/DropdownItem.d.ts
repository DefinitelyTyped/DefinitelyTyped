import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type DropdownItemProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  disabled?: boolean;
  divider?: boolean;
  tag?: React.ReactType;
  header?: boolean;
  onClick?: (event: ReactDOM.MouseEvent<any>) => void;
  className?: string;
  cssModule?: CSSModule;
  href?: string;
  toggle?: boolean;
  active?: boolean;
} & T;

declare class DropdownItem<T> extends React.Component<DropdownItemProps<T>> {}
export default DropdownItem;
