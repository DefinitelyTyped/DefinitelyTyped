import * as React from 'react';
import { CSSModule } from '../index';

export type CustomInputType =
  | 'select'
  | 'file'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'range';

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any;
  type: CustomInputType;
  label?: React.ReactNode;
  inline?: boolean;
  bsSize?: 'lg' | 'sm';
  valid?: boolean;
  invalid?: boolean;
  cssModule?: CSSModule;
  htmlFor?: string;
}

declare class CustomInput<T = {[key: string]: any}> extends React.Component<CustomInputProps> {}
export default CustomInput;
