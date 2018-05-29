import * as React from 'react';
import { CSSModule } from '../index';

export type InputGroupTextProps<T = {}> = React.HTMLAttributes<HTMLElement>  & {
  tag?: React.ReactType;
  cssModule?: CSSModule;
} & T;

declare class InputGroupText<T = {}> extends React.Component<InputGroupTextProps<T>> {}
export default InputGroupText;
