import * as React from 'react';
import { CSSModule } from '../index';

export interface ListGroupItemProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  active?: boolean;
  disabled?: boolean;
  color?: string;
  action?: boolean;
  className?: string;
  cssModule?: CSSModule;
  href?: string;

  onClick?: React.MouseEventHandler<any>;
}

declare class ListGroupItem<T = {[key: string]: any}> extends React.Component<ListGroupItemProps> {}
export default ListGroupItem;
