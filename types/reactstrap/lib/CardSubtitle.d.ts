import * as React from 'react';
import { CSSModule } from '../index';

export type CardSubtitleProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardSubtitle<T = {}> extends React.Component<CardSubtitleProps<T>> {}
export default CardSubtitle;
