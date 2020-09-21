import * as React from 'react';
import { CSSModule } from '../index';

export interface ProgressProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  bar?: boolean;
  multi?: boolean;
  tag?: string;
  value?: string | number;
  min?: string | number;
  max?: string | number;
  animated?: boolean;
  striped?: boolean;
  color?: string;
  cssModule?: CSSModule;
  barClassName?: string;
  barAriaValueText?: string;
  barAriaLabelledBy?: string;
}

declare class Progress<T = {[key: string]: any}> extends React.Component<ProgressProps> {}
export default Progress;
