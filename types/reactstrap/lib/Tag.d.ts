import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type TagProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  color?: string;
  pill?: boolean;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class Tag<T = {[key: string]: any}> extends React.Component<TagProps<T>> {}
export default Tag;
