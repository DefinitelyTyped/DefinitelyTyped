import * as React from 'react';
import { Sizes } from 'react-bootstrap';
import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import NavbarHeader from './NavbarHeader';
import NavbarToggle from './NavbarToggle';

interface NavbarProps extends React.HTMLProps<Navbar> {
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
  navExpanded?: boolean;
  onToggle?: Function;
  staticTop?: boolean;
  toggleButton?: any; // TODO: Add more specific type
  toggleNavKey?: string | number;
}

export default class Navbar extends React.Component<NavbarProps> {
  public static Brand: typeof NavbarBrand;
  public static Collapse: typeof NavbarCollapse;
  public static Header: typeof NavbarHeader;
  public static Toggle: typeof NavbarToggle;
  public static Link: typeof NavbarLink;
  public static Text: typeof NavbarText;
  public static Form: typeof NavbarForm;
}

/**
 * the classes below aren't present in lib/
 */

interface NavbarLinkProps extends React.Props<NavbarLink> {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
declare class NavbarLink extends React.Component<NavbarLinkProps> { }

interface NavbarTextProps extends React.HTMLProps<NavbarText> {
  pullRight?: boolean;
}
declare class NavbarText extends React.Component<NavbarTextProps> { }

interface NavbarFormProps extends React.HTMLProps<NavbarForm> {
  componentClass?: React.ReactType;
  pullRight?: boolean;
}
declare class NavbarForm extends React.Component<NavbarFormProps> { }
