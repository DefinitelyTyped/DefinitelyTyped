import * as React from 'react';

export interface DropdownToggleProps extends React.HTMLProps<DropdownToggle> {
  bsRole?: string;
  noCaret?: boolean;
  open?: boolean;
  title?: string;
  useAnchor?: boolean;
  bsClass?:string; // Added since v0.30.0
  bsStyle?:string;
}

export default class DropdownToggle extends React.Component<DropdownToggleProps> { }
