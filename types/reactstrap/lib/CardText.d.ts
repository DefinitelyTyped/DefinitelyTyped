import * as React from 'react';
import { CSSModule } from '../index';

export interface CardTextProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare class CardText<T = {[key: string]: any}> extends React.Component<CardTextProps> {}
export default CardText;
