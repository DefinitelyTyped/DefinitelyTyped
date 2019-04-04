import * as React from 'react';
import { CSSModule } from '../index';

export type FormProps<T = {}> = React.HTMLProps<HTMLFormElement> & {
  inline?: boolean;
  tag?: React.ElementType;
  innerRef?: React.Ref<HTMLFormElement>;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class Form<T> extends React.Component<FormProps<T>> {}
export default Form;
