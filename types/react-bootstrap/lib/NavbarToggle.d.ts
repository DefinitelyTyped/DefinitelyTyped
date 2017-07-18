import * as React from 'react';

interface NavbarToggleProps extends React.Props<NavbarToggle> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default class NavbarToggle extends React.Component<NavbarToggleProps> { }
