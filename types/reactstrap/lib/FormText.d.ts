import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type FormTextProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  inline?: boolean;
  tag?: React.ReactType;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class FormText<T = {[key: string]: any}> extends React.Component<FormTextProps<T>> {}
export default FormText;
