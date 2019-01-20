import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type CardLinkProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  innerRef?: React.Ref<HTMLAnchorElement>;
  className?: string;
  cssModule?: CSSModule;
  href?: string;
} & T;

declare class CardLink<T = {[key: string]: any}> extends React.Component<CardLinkProps<T>> {}
export default CardLink;
