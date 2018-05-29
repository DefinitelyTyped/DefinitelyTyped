import * as React from 'react';
import { CSSModule } from '../index';

export type FormTextProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  inline?: boolean;
  tag?: React.ReactType;
  color?: string;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class FormText<T = {[key: string]: any}> extends React.Component<FormTextProps<T>> {}
export default FormText;
