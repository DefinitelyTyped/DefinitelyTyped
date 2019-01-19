import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sizes } from 'react-bootstrap';
import NavbarBrand = require('./NavbarBrand');
import NavbarCollapse = require('./NavbarCollapse');
import NavbarHeader = require('./NavbarHeader');
import NavbarToggle = require('./NavbarToggle');

declare namespace Navbar {
    export interface NavbarProps extends ReactDOM.HTMLProps<Navbar> {
        brand?: any; // TODO: Add more specific type
        bsSize?: Sizes;
        bsStyle?: string;
        collapseOnSelect?: boolean;
        componentClass?: React.ReactType;
        defaultNavExpanded?: boolean;
        fixedBottom?: boolean;
        fixedTop?: boolean;
        fluid?: boolean;
        inverse?: boolean;
        expanded?: boolean;
        onToggle?: Function;
        staticTop?: boolean;
        toggleButton?: any; // TODO: Add more specific type
        toggleNavKey?: string | number;
    }
}
declare class Navbar extends React.Component<Navbar.NavbarProps> {
    static Brand: typeof NavbarBrand;
    static Collapse: typeof NavbarCollapse;
    static Header: typeof NavbarHeader;
    static Toggle: typeof NavbarToggle;
    static Link: typeof NavbarLink;
    static Text: typeof NavbarText;
    static Form: typeof NavbarForm;
}
export = Navbar;

/**
 * the classes below aren't present in lib/
 */

interface NavbarLinkProps extends ReactDOM.HTMLProps<NavbarLink> {
  href: string;
  onClick?: ReactDOM.MouseEventHandler<any>;
}
declare class NavbarLink extends React.Component<NavbarLinkProps> { }

interface NavbarTextProps extends ReactDOM.HTMLProps<NavbarText> {
  pullRight?: boolean;
}
declare class NavbarText extends React.Component<NavbarTextProps> { }

interface NavbarFormProps extends ReactDOM.HTMLProps<NavbarForm> {
  componentClass?: React.ReactType;
  pullRight?: boolean;
  pullLeft?: boolean;
}
declare class NavbarForm extends React.Component<NavbarFormProps> { }
