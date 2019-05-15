import * as React from 'react';
import { CSSModule } from '../index';

export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
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
}

declare class Progress<T = {[key: string]: any}> extends React.Component<ProgressProps> {}
export default Progress;
