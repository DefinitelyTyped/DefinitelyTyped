import * as React from 'react';
import { CSSModule } from '../index';

export type MediaProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
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
  href?: string;
  alt?: string;
} & T;

declare class Media<T = {}> extends React.Component<MediaProps<T>> {}
export default Media;
