import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace NavbarHeader {
    export type NavbarHeaderProps = ReactDOM.HTMLProps<NavbarHeader>;
}
declare class NavbarHeader extends React.Component<NavbarHeader.NavbarHeaderProps> { }
export = NavbarHeader;
