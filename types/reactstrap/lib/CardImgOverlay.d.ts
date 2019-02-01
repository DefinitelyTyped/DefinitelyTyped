import * as React from 'react';
import { CSSModule } from '../index';

export type CardImgOverlayProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardImgOverlay<T = {[key: string]: any}> extends React.Component<CardImgOverlayProps<T>> {}
export default CardImgOverlay;
