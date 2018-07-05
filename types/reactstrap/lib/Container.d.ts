import * as React from 'react';
import { CSSModule } from '../index';

export type ContainerProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  fluid?: boolean;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class Container<T = {[key: string]: any}> extends React.Component<ContainerProps<T>> {}
export default Container;
