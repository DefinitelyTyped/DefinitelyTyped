// Type definitions for react-router-hash-link 2.0
// Project: https://github.com/rafrex/react-router-hash-link
// Definitions by: Sam Baeck <https://github.com/zoompie>
//                 Michael Vasyliv <https://github.com/michael-vasyliv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

import * as React from 'react';
import { LinkProps, NavLinkProps } from 'react-router-dom';

export interface HashLinkProps extends LinkProps {
  smooth?: boolean;
  scroll?: (element: HTMLElement) => void;
}

export interface NavHashLinkProps extends NavLinkProps, HashLinkProps { }

export class HashLink extends React.Component<HashLinkProps, any> { }

export class NavHashLink extends React.Component<NavHashLinkProps, any> { }

export function genericHashLink<P>(Component: React.FunctionComponent<P>): React.FunctionComponent<P>;
