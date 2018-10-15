import * as React from 'react';
import { CSSModule } from '../index';

export type CardDeckProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardDeck<T = {[key: string]: any}> extends React.Component<CardDeckProps<T>> {}
export default CardDeck;
