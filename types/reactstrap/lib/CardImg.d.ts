import * as React from 'react';
import { CSSModule } from '../index';

export interface CardImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    [key: string]: any;
    tag?: React.ElementType;
    top?: boolean;
    bottom?: boolean;
    cssModule?: CSSModule;
}

declare class CardImg<T = {[key: string]: any}> extends React.Component<CardImgProps> {}
export default CardImg;
