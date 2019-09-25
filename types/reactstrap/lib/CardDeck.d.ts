import * as React from 'react';
import { CSSModule } from '../index';

export interface CardDeckProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare class CardDeck<T = {[key: string]: any}> extends React.Component<CardDeckProps> {}
export default CardDeck;
