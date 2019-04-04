import * as React from 'react';
import { CSSModule } from '../index';

export type PopoverHeaderProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class PopoverHeader<T = {[key: string]: any}> extends React.Component<PopoverHeaderProps<T>> {}
export default PopoverHeader;
