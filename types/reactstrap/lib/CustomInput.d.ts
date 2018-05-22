import * as React from 'react';
import { CSSModule } from '../index';

export type CustomInputType =
  | 'select'
  | 'file'
  | 'radio'
  | 'checkbox';

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: CustomInputType;
  label?: string;
  inline?: boolean;
  bsSize?: 'lg' | 'sm';
  valid?: boolean;
  invalid?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

declare class CustomInput extends React.Component<CustomInputProps> {}
export default CustomInput;
