import * as React from 'react';
import { CSSModule } from '../index';

export type BadgeProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  color?: string;
  pill?: boolean;
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class Badge<T = {[key: string]: any}> extends React.Component<BadgeProps<T>> {}
export default Badge;
