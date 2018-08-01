import * as React from 'react';
import { CSSModule } from '../index';

export type CardImgProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  top?: boolean;
  bottom?: boolean;
  className?: string;
  cssModule?: CSSModule;
  src?: string;
  width?: string;
  height?: string;
  alt?: string;
} & T;

declare class CardImg<T = {[key: string]: any}> extends React.Component<CardImgProps<T>> {}
export default CardImg;
