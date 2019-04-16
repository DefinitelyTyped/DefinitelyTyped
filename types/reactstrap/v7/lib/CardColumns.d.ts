import * as React from 'react';
import { CSSModule } from '../index';

export type CardColumnsProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardColumns<T = {[key: string]: any}> extends React.Component<CardColumnsProps<T>> {}
export default CardColumns;
