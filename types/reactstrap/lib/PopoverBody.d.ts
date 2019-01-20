import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type PopoverBodyProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class PopoverBody<T = {[key: string]: any}> extends React.Component<PopoverBodyProps<T>> {}
export default PopoverBody;
