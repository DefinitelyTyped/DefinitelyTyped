import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type ListGroupItemHeadingProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class ListGroupItemHeading<T = {[key: string]: any}> extends React.Component<ListGroupItemHeadingProps<T>> {}
export default ListGroupItemHeading;
