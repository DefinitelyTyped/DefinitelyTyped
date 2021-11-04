import * as React from 'react';
import Router from './Router';

type E = React.ReactElement;
export function isReactChildren(object: E | E[]): boolean;
export function createRouteFromReactElement(element: E): Router.PlainRoute;
export function createRoutesFromReactChildren(children: E | E[], parentRoute: Router.PlainRoute): Router.PlainRoute[];
export function createRoutes(routes: Router.RouteConfig): Router.PlainRoute[];
