import * as React from 'react';
import { CSSModule } from '../index';

export type ToastHeaderProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  wrapTag?: React.ReactType;
  toggle?: () => void;
  icon?: string | React.ReactNode;
  close?: React.ReactNode;
  charCode?: string | number;
  closeAriaLabel?: string;
} & T;

declare class ToastHeader<T = {[key: string]: any}> extends React.Component<ToastHeaderProps<T>> {}
export default ToastHeader;
