import * as React from 'react';
import { CSSModule } from '../index';

export interface InputGroupTextProps extends React.HTMLAttributes<HTMLElement>  {
  [key: string]: any;
  tag?: React.ReactType;
  cssModule?: CSSModule;
}

declare class InputGroupText<T = {[key: string]: any}> extends React.Component<InputGroupTextProps> {}
export default InputGroupText;
