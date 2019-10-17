import * as React from 'react';
import { CSSModule } from '../index';

export type CardFooterProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardFooter<T = {[key: string]: any}> extends React.Component<CardFooterProps<T>> {}
export default CardFooter;
