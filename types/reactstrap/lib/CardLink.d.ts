import * as React from 'react';
import { CSSModule } from '../index';

export type CardLinkProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  innerRef?: React.Ref<HTMLAnchorElement>;
  className?: string;
  cssModule?: CSSModule;
  href?: string;
} & T;

declare class CardLink<T = {}> extends React.Component<CardLinkProps<T>> {}
export default CardLink;
