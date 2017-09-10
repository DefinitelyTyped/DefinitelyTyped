import * as React from 'react';

declare class NavbarToggle extends React.Component<NavbarToggleProps> { }
declare namespace NavbarToggle { }
export = NavbarToggle

interface NavbarToggleProps extends React.Props<NavbarToggle> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
