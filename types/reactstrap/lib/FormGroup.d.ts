import * as React from 'react';
import { CSSModule } from '../index';

export interface FormGroupProps extends React.HTMLProps<HTMLDivElement> {
  [key: string]: any;
  row?: boolean;
  check?: boolean;
  inline?: boolean;
  disabled?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare class FormGroup<T = {[key: string]: any}> extends React.Component<FormGroupProps> {}
export default FormGroup;
