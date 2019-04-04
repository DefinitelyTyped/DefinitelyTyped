import * as React from 'react';
import { CSSModule } from '../index';

export type CardSubtitleProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardSubtitle<T = {[key: string]: any}> extends React.Component<CardSubtitleProps<T>> {}
export default CardSubtitle;
