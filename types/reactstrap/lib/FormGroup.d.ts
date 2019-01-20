import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type FormGroupProps<T = {}> = ReactDOM.HTMLProps<HTMLDivElement> & {
  row?: boolean;
  check?: boolean;
  inline?: boolean;
  disabled?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class FormGroup<T = {[key: string]: any}> extends React.Component<FormGroupProps<T>> {}
export default FormGroup;
