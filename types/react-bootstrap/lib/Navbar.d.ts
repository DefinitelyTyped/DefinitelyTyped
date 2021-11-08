import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import NavbarBrand = require('./NavbarBrand');
import NavbarCollapse = require('./NavbarCollapse');
import NavbarHeader = require('./NavbarHeader');
import NavbarToggle = require('./NavbarToggle');

declare namespace Navbar {
    export interface NavbarProps extends React.HTMLProps<Navbar> {
        brand?: any; // TODO: Add more specific type
        bsSize?: Sizes | undefined;
        bsStyle?: string | undefined;
        collapseOnSelect?: boolean | undefined;
        componentClass?: React.ElementType | undefined;
        defaultNavExpanded?: boolean | undefined;
        fixedBottom?: boolean | undefined;
        fixedTop?: boolean | undefined;
        fluid?: boolean | undefined;
        inverse?: boolean | undefined;
        expanded?: boolean | undefined;
        onToggle?: Function | undefined;
        staticTop?: boolean | undefined;
        toggleButton?: any; // TODO: Add more specific type
        toggleNavKey?: string | number | undefined;
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

interface NavbarLinkProps extends React.HTMLProps<NavbarLink> {
  href: string;
  onClick?: React.MouseEventHandler<any> | undefined;
}
declare class NavbarLink extends React.Component<NavbarLinkProps> { }

interface NavbarTextProps extends React.HTMLProps<NavbarText> {
  pullRight?: boolean | undefined;
}
declare class NavbarText extends React.Component<NavbarTextProps> { }

interface NavbarFormProps extends React.HTMLProps<NavbarForm> {
  componentClass?: React.ElementType | undefined;
  pullRight?: boolean | undefined;
  pullLeft?: boolean | undefined;
}
declare class NavbarForm extends React.Component<NavbarFormProps> { }
