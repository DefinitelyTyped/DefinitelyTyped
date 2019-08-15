import * as React from 'react';
import { CSSModule } from '../index';

export interface FormProps extends React.HTMLProps<HTMLFormElement> {
  [key: string]: any;
  inline?: boolean;
  tag?: React.ReactType;
  innerRef?: React.Ref<HTMLFormElement>;
  className?: string;
  cssModule?: CSSModule;
}

declare class Form<T> extends React.Component<FormProps> {}
export default Form;
