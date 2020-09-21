import * as React from 'react';
import { CSSModule } from '../index';

export interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    [key: string]: any;
    tag?: React.ElementType;
    innerRef?: React.Ref<HTMLAnchorElement>;
    cssModule?: CSSModule;
}

declare class CardLink<T = {[key: string]: any}> extends React.Component<CardLinkProps> {}
export default CardLink;
