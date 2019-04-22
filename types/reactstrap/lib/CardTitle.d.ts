import * as React from 'react';
import { CSSModule } from '../index';

export interface CardTitleProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare class CardTitle<T = {[key: string]: any}> extends React.Component<CardTitleProps> {}
export default CardTitle;
