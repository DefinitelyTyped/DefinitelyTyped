import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type CardProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  inverse?: boolean;
  color?: string;
  block?: boolean;
  body?: boolean;
  outline?: boolean;
  className?: string;
  cssModule?: CSSModule;
  style?: ReactDOM.CSSProperties;
} & T;

declare class Card<T = {[key: string]: any}> extends React.Component<CardProps<T>> {}
export default Card;
