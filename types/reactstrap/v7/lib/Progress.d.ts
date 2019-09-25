import * as React from 'react';
import { CSSModule } from '../index';

export type ProgressProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  bar?: boolean;
  multi?: boolean;
  tag?: string;
  value?: string | number;
  max?: string | number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
  barClassName?: string;
} & T;

declare class Progress<T = {[key: string]: any}> extends React.Component<ProgressProps<T>> {}
export default Progress;
