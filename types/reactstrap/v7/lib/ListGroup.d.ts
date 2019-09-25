import * as React from 'react';
import { CSSModule } from '../index';

export type ListGroupProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  flush?: boolean;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class ListGroup<T = {[key: string]: any}> extends React.Component<ListGroupProps<T>> {}
export default ListGroup;
