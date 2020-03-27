import * as React from 'react';
import * as Popper from 'popper.js';
import { CSSModule } from '../index';

export type DropdownMenuProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  right?: boolean;
  className?: string;
  cssModule?: CSSModule;
  flip?: boolean;
  modifiers?: Popper.Modifiers;
  persist?: boolean;
  positionFixed?: boolean;
} & T;

declare class DropdownMenu<T = {[key: string]: any}> extends React.Component<DropdownMenuProps<T>> {}
export default DropdownMenu;
