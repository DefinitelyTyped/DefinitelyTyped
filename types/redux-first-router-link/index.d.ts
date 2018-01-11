// Type definitions for redux-first-router-link 1.4
// Project: https://github.com/faceyspacey/redux-first-router-link#readme
// Definitions by: janb87 <https://github.com/janb87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from "react";
import { Location } from 'redux-first-router';

export type To = string | string[] | object;

export type OnClick = false | ((e: React.MouseEvent<HTMLElement>) => void);

export interface Match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
}

export interface LinkProps {
    to: To;
    redirect?: boolean;
    replace?: boolean;
    tagName?: string;
    children?: React.ReactNode;
    onPress?: OnClick;
    onClick?: OnClick;
    down?: boolean;
    shouldDispatch?: boolean;
    target?: string;
}

export default class Link extends React.Component<LinkProps> {}

export interface NavLinkProps {
    to: To;
    redirect?: boolean;
    replace?: boolean;
    children?: React.ReactNode;
    onPress?: OnClick;
    onClick?: OnClick;
    down?: boolean;
    shouldDispatch?: boolean;
    target?: string;
    className?: string;
    style?: React.CSSProperties;
    activeClassName?: string;
    activeStyle?: React.CSSProperties;
    ariaCurrent?: string;
    exact?: boolean;
    strict?: boolean;
    isActive?(match: Match<object>, location: Location): boolean;
}

export class NavLink extends React.Component<NavLinkProps> {}
