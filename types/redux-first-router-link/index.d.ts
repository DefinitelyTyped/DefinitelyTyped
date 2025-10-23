import * as React from "react";
import { Location } from "redux-first-router";

export type To = string | string[] | object;

export interface Match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
}

// Unfortunately we can't pass `HTMLAnchorElement` since the `tagName` attribute allows you to use other tags than anchor.
export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
    to: To;
    redirect?: boolean | undefined;
    replace?: boolean | undefined;
    tagName?: string | undefined;
    down?: boolean | undefined;
    shouldDispatch?: boolean | undefined;
    target?: string | undefined;
    children?: React.ReactNode;
}

export default class Link extends React.Component<LinkProps> {}

export interface NavLinkProps extends LinkProps {
    activeClassName?: string | undefined;
    activeStyle?: React.CSSProperties | undefined;
    ariaCurrent?: string | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
    children?: React.ReactNode;
    isActive?(match: Match<object>, location: Location): boolean;
}

export class NavLink extends React.Component<NavLinkProps> {}
