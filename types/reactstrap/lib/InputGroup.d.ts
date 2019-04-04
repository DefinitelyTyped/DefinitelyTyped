import * as React from 'react';
import { CSSModule } from '../index';

export type InputGroupProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ElementType;
  size?: string;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class InputGroup<T = {[key: string]: any}> extends React.Component<InputGroupProps<T>> {}
export default InputGroup;
