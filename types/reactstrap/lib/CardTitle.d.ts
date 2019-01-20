import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type CardTitleProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardTitle<T = {[key: string]: any}> extends React.Component<CardTitleProps<T>> {}
export default CardTitle;
