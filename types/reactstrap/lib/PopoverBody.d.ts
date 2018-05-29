import * as React from 'react';
import { CSSModule } from '../index';

export type PopoverBodyProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class PopoverBody<T = {}> extends React.Component<PopoverBodyProps<T>> {}
export default PopoverBody;
