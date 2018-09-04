import * as React from 'react';
import { CSSModule } from '../index';

export type ListGroupItemHeadingProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class ListGroupItemHeading<T = {[key: string]: any}> extends React.Component<ListGroupItemHeadingProps<T>> {}
export default ListGroupItemHeading;
