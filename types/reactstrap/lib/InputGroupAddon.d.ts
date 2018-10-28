import * as React from 'react';
import { CSSModule } from '../index';

export type InputGroupAddonProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  addonType: 'prepend' | 'append';
} & T;

declare class InputGroupAddon<T = {[key: string]: any}> extends React.Component<InputGroupAddonProps<T>> {}
export default InputGroupAddon;
