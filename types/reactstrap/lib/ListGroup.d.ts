import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type ListGroupProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  flush?: boolean;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class ListGroup<T = {[key: string]: any}> extends React.Component<ListGroupProps<T>> {}
export default ListGroup;
