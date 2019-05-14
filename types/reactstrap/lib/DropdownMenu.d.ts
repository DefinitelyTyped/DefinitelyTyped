import * as React from 'react';
import * as Popper from 'popper.js';
import { CSSModule } from '../index';

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  right?: boolean;
  className?: string;
  cssModule?: CSSModule;
  flip?: boolean;
  modifiers?: Popper.Modifiers;
  persist?: boolean;
}

declare class DropdownMenu<T = {[key: string]: any}> extends React.Component<DropdownMenuProps> {}
export default DropdownMenu;
