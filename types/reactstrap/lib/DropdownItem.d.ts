import * as React from 'react';
import { CSSModule } from '../index';

export type DropdownItemProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  disabled?: boolean;
  divider?: boolean;
  tag?: React.ReactType;
  header?: boolean;
  onClick?: (event: React.MouseEvent<any>) => void;
  className?: string;
  cssModule?: CSSModule;
  href?: string;
  toggle?: boolean;
  active?: boolean;
} & T;

declare class DropdownItem<T> extends React.Component<DropdownItemProps<T>> {}
export default DropdownItem;
