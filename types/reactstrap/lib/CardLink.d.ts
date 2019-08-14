import * as React from 'react';
import { CSSModule } from '../index';

export interface CardLinkProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  innerRef?: React.Ref<HTMLAnchorElement>;
  className?: string;
  cssModule?: CSSModule;
  href?: string;
}

declare class CardLink<T = {[key: string]: any}> extends React.Component<CardLinkProps> {}
export default CardLink;
