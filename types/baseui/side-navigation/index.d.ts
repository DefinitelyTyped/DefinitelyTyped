/// <reference types="baseui"/>
import * as React from 'react';
import { StyletronComponent } from 'styletron-react';

export interface STATE_CHANGE_TYPE {
    change: 'change';
}

export interface Item {
  title: React.ReactNode;
  itemId?: string;
  subNav?: Item[];
}

export interface NavigationOverrides {
  Root?: Override<any>;
  NavItemContainer?: Override<any>;
  NavLink?: Override<any>;
  NavItem?: Override<any>;
  SubNavContainer?: Override<any>;
}

export interface NavigationProps {
  activeItemId: string;
  activePredicate?: (item: any, activeItemId: string) => boolean;
  items?: Item[];
  onChange?: (args: {item: any, event: React.SyntheticEvent<any>}) => any;
  overrides?: NavigationOverrides;
  mapItem?: (item: Item) => Item;
}

export class Navigation extends React.Component<NavigationProps> {
  activePredicate(item: Item): boolean;
}

export interface NavItemOverrides {
  NavLink?: Override<any>;
  NavItem?: Override<any>;
}

export interface NavItemProps {
  $active?: boolean;
  $level?: number;
  $selectable?: boolean;
  item: Item;
  onSelect?: (args: {item: any, event: Event | KeyboardEvent}) => any;
  overrides?: NavItemOverrides;
}

export class NavItem extends React.Component<NavItemProps> {
  handleClick(event: React.SyntheticEvent<Event>): void;
  handleKeyDown(event: React.SyntheticEvent<KeyboardEvent>): void;
}

export const StyledRoot: StyletronComponent<any>;
export const StyledNavItemContainer: StyletronComponent<any>;
export const StyledNavLink: StyletronComponent<any>;
export const StyledNavItem: StyletronComponent<any>;
export const StyledSubNavContainer: StyletronComponent<any>;

export const STATE_CHANGE_TYPE: STATE_CHANGE_TYPE;
