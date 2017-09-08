import * as React from 'react';

declare class DropdownToggle extends React.Component<DropdownToggle.DropdownToggleProps> { }
export = DropdownToggle

declare namespace DropdownToggle {
  interface DropdownToggleProps extends React.HTMLProps<DropdownToggle> {
    bsRole?: string;
    noCaret?: boolean;
    open?: boolean;
    title?: string;
    useAnchor?: boolean;
    bsClass?:string; // Added since v0.30.0
    bsStyle?:string;
  }
}
