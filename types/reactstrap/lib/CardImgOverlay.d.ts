import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type CardImgOverlayProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardImgOverlay<T = {[key: string]: any}> extends React.Component<CardImgOverlayProps<T>> {}
export default CardImgOverlay;
