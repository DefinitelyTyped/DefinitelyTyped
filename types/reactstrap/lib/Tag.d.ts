import * as React from 'react';
import { CSSModule } from '../index';

export type TagProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  color?: string;
  pill?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class Tag<T = {[key: string]: any}> extends React.Component<TagProps<T>> {}
export default Tag;
