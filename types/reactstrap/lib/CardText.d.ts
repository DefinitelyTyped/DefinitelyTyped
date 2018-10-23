import * as React from 'react';
import { CSSModule } from '../index';

export type CardTextProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardText<T = {[key: string]: any}> extends React.Component<CardTextProps<T>> {}
export default CardText;
