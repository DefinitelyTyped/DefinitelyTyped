import * as React from 'react';
import { CSSModule } from '../index';

export type SpinnerProps<T = {}> = React.HTMLProps<HTMLElement> & {
  tag?: React.ReactType;
  type?: string;
  size?: any;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class Spinner<T = {[key: string]: any}> extends React.Component<SpinnerProps<T>> {}
export default Spinner;
