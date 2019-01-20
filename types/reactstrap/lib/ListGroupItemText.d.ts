import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type ListGroupItemTextProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class ListGroupItemText<T = {[key: string]: any}> extends React.Component<ListGroupItemTextProps<T>> {}
export default ListGroupItemText;
