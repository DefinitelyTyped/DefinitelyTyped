import * as React from 'react';
import { CSSModule } from '../index';

export interface CardImgProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  top?: boolean;
  bottom?: boolean;
  className?: string;
  cssModule?: CSSModule;
  src?: string;
  width?: string;
  height?: string;
  alt?: string;
}

declare class CardImg<T = {[key: string]: any}> extends React.Component<CardImgProps> {}
export default CardImg;
