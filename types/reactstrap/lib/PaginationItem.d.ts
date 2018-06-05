import * as React from 'react';
import { CSSModule } from '../index';

export type PaginationItemProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  className?: string;
  cssModule?: CSSModule;
  active?: boolean;
  disabled?: boolean;
  tag?: React.ReactType;
} & T;

declare class PaginationItem<T = {[key: string]: any}> extends React.Component<PaginationItemProps<T>> {}
export default PaginationItem;
