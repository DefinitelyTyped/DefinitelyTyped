import * as React from 'react';
import { CSSModule } from '../index';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    inverse?: boolean;
    color?: string;
    body?: boolean;
    outline?: boolean;
    cssModule?: CSSModule;
}

declare class Card<T = {[key: string]: any}> extends React.Component<CardProps> {}
export default Card;
