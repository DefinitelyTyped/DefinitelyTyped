import * as React from 'react';
import { CSSModule } from '../index';

export type CardProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  inverse?: boolean;
  color?: string;
  block?: boolean;
  body?: boolean;
  outline?: boolean;
  className?: string;
  cssModule?: CSSModule;
  style?: React.CSSProperties;
} & T;

declare class Card<T = {[key: string]: any}> extends React.Component<CardProps<T>> {}
export default Card;
