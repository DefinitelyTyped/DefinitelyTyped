import * as React from 'react';
import { CSSModule } from '../index';

export type DropdownMenuProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  right?: boolean;
  className?: string;
  cssModule?: CSSModule;
  flip?: boolean;
} & T;

declare class DropdownMenu<T = {[key: string]: any}> extends React.Component<DropdownMenuProps<T>> {}
export default DropdownMenu;
