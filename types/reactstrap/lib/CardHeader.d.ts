import * as React from 'react';
import { CSSModule } from '../index';

export type CardHeaderProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardHeader<T = {[key: string]: any}> extends React.Component<CardHeaderProps<T>> {}
export default CardHeader;
