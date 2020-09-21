import * as React from 'react';
import { CSSModule } from '../index';

export interface CardBodyProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    cssModule?: CSSModule;
}

declare class CardBody<T = {[key: string]: any}> extends React.Component<CardBodyProps> {}
export default CardBody;
