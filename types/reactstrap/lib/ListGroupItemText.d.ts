import * as React from 'react';
import { CSSModule } from '../index';

export type ListGroupItemTextProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class ListGroupItemText<T = {[key: string]: any}> extends React.Component<ListGroupItemTextProps<T>> {}
export default ListGroupItemText;
