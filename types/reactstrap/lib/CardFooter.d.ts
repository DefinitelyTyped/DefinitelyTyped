import * as React from 'react';
import { CSSModule } from '../index';

export interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    cssModule?: CSSModule;
}

declare class CardFooter<T = {[key: string]: any}> extends React.Component<CardFooterProps> {}
export default CardFooter;
