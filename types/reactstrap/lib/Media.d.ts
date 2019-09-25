import * as React from 'react';
import { CSSModule } from '../index';

export interface MediaProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  body?: boolean;
  bottom?: boolean;
  className?: string;
  cssModule?: CSSModule;
  heading?: boolean;
  left?: boolean;
  list?: boolean;
  middle?: boolean;
  object?: boolean;
  right?: boolean;
  tag?: React.ReactType;
  top?: boolean;
  src?: string;
  href?: string;
  alt?: string;
}

declare class Media<T = {[key: string]: any}> extends React.Component<MediaProps> {}
export default Media;
