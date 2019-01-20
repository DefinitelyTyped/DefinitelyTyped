import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type CardSubtitleProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardSubtitle<T = {[key: string]: any}> extends React.Component<CardSubtitleProps<T>> {}
export default CardSubtitle;
