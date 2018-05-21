import * as React from 'react';
import { CSSModule } from '../index';

export interface FormProps extends React.HTMLProps<HTMLFormElement> {
  inline?: boolean;
  tag?: React.ReactType;
  innerRef?: React.Ref<HTMLFormElement>;
  className?: string;
  cssModule?: CSSModule;
}

declare class Form extends React.Component<FormProps> {}
export default Form;
