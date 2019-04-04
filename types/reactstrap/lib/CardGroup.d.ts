import * as React from 'react';
import { CSSModule } from '../index';

export type CardGroupProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardGroup<T = {[key: string]: any}> extends React.Component<CardGroupProps<T>> {}
export default CardGroup;
