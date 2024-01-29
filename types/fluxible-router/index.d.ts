/// <reference types="node" />
import { FluxibleContext } from "fluxible";
import * as React from "react";
import BaseStore = require("fluxible/addons/BaseStore");

export class NavLink extends React.Component<NavLinkProps, any> {}

export class RouteStore extends BaseStore {
    dehydrate(context?: FluxibleContext): any;

    rehydrate(state: any): void;

    static withStaticRoutes(routes: object): typeof RouteStore;
}

export function handleHistory(Component: typeof React.Component, opts?: object): typeof React.Component;

export function navigateAction(context: FluxibleContext, params: object): undefined;

export class NavLinkProps {
    href?: string | undefined;
    routeName?: string | undefined;
    activeStyle?: object | undefined;
    preserveScrollPosition?: boolean | undefined;
    className?: string | undefined;
    type?: string | undefined;
    activeClass?: string;
    activeElement?: string;
    followLink?: boolean;
    stopPropagation?: boolean;
    replaceState?: boolean;
    validate?: boolean;
    navParams?: object;
    queryParams?: object;
}
