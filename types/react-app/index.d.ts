// Type definitions for react-app 1.0
// Project: https://github.com/kriasoft/react-app#readme
// Definitions by: Prakarsh Pandey <https://github.com/prakarshpandey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface LinkProps {
    to: string;
    onClick?(): void;
    className?: string;
}

export interface LayoutProps {
    className: string;
}

export interface RouteProps { // takes the form of universal-router routes
    path: string;
    children: ChildProps[];
}

export interface ChildProps {
    path: string;
    action(params: any): any;
}

export interface CreateAppObject {
    routes: RouteProps;
    context: {};
    container: Element | null;
}

// exporting the createApp function
export function createApp(createAppObject: CreateAppObject): JSX.Element;

export class Link extends React.Component<LinkProps> {}
export class Layout extends React.Component<LayoutProps> {}
export class Header extends React.Component {}
export class Navigation extends React.Component {}
