import * as React from 'react';
import { CSSModule } from '../index';

export type JumbotronProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  fluid?: boolean;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class Jumbotron<T = {[key: string]: any}> extends React.Component<JumbotronProps<T>> {}
export default Jumbotron;
