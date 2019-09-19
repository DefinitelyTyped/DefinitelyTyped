import * as React from 'react';
import { CSSModule } from '../index';

export interface CardGroupProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare class CardGroup<T = {[key: string]: any}> extends React.Component<CardGroupProps> {}
export default CardGroup;
