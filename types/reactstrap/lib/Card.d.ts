import * as React from 'react';
import { CSSModule } from '../index';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  inverse?: boolean;
  color?: string;
  body?: boolean;
  outline?: boolean;
  className?: string;
  cssModule?: CSSModule;
  style?: React.CSSProperties;
}

declare class Card<T = {[key: string]: any}> extends React.Component<CardProps> {}
export default Card;
