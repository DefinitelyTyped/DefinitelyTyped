import * as React from 'react';
import { CSSModule } from '../index';

export type CardBodyProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class CardBody<T = {[key: string]: any}> extends React.Component<CardBodyProps<T>> {}
export default CardBody;
