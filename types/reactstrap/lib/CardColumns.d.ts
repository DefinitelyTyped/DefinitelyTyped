import * as React from 'react';
import { CSSModule } from '../index';

export interface CardColumnsProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    cssModule?: CSSModule;
}

declare class CardColumns<T = {[key: string]: any}> extends React.Component<CardColumnsProps> {}
export default CardColumns;
