import * as React from 'react';
import { CSSModule } from '../index';

export interface InputGroupProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  size?: string;
  className?: string;
  cssModule?: CSSModule;
}

declare class InputGroup<T = {[key: string]: any}> extends React.Component<InputGroupProps> {}
export default InputGroup;
