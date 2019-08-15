import * as React from 'react';
import { CSSModule } from '../index';

export interface JumbotronProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  fluid?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare class Jumbotron<T = {[key: string]: any}> extends React.Component<JumbotronProps> {}
export default Jumbotron;
