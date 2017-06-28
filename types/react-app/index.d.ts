// Type definitions for react-app 1.0.0-alpha.3
// Project: https://github.com/kriasoft/react-app#readme
// Definitions by: Prakarsh Pandey <https://github.com/prakarshpandey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface LinkProps {
    to: string | object;
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
    action(params: any): object;
}

export interface CreateAppObject {
    routes: RouteProps;
    context: object;
    container: Element | null;
}

// exporting the createApp function
export function createApp(createAppObject: CreateAppObject): JSX.Element;

export const Link: React.ComponentClass<LinkProps>;
export const Layout: React.ComponentClass<LayoutProps>;
export const Header: React.ComponentClass<{}>;
export const Navigation: React.ComponentClass<{}>;
