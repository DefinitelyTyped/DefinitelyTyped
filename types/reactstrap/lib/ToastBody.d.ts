import * as React from 'react';
import { CSSModule } from '../index';

export type ToastBodyProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  innerRef?: React.Ref<HTMLElement>;
} & T;

declare class ToastBody<T = {[key: string]: any}> extends React.Component<ToastBodyProps<T>> {}
export default ToastBody;
