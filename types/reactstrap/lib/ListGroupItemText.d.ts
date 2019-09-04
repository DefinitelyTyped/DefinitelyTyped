import * as React from 'react';
import { CSSModule } from '../index';

export interface ListGroupItemTextProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare class ListGroupItemText<T = {[key: string]: any}> extends React.Component<ListGroupItemTextProps> {}
export default ListGroupItemText;
