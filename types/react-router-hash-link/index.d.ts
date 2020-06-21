// Type definitions for react-router-hash-link 1.2
// Project: https://github.com/rafrex/react-router-hash-link
// Definitions by: Sam Baeck <https://github.com/zoompie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { LinkProps, NavLinkProps } from 'react-router-dom';
import * as H from 'history';

export type HashLinkProps<S = H.LocationState> = LinkProps<S> & {
  smooth?: boolean;
  scroll?: (element: HTMLElement) => void;
};

export class HashLink extends React.Component<HashLinkProps, any> {}

export type NavHashLinkProps<S = H.LocationState> = NavLinkProps<S> & HashLinkProps<S>;

export class NavHashLink extends React.Component<NavHashLinkProps, any> {}
