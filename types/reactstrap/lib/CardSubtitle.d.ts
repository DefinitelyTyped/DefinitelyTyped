import * as React from 'react';
import { CSSModule } from '../index';

export interface CardSubtitleProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    cssModule?: CSSModule;
}

declare class CardSubtitle<T = {[key: string]: any}> extends React.Component<CardSubtitleProps> {}
export default CardSubtitle;
