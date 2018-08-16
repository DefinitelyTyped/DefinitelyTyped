import { Component, ComponentClass, ClassAttributes, ReactNode, StatelessComponent } from "react";
import {
    Action,
    History,
    Href,
    Location,
    LocationDescriptor,
    LocationKey,
    LocationState,
    Path,
    Pathname,
    Query,
    Search
} from "history";
import { PlainRoute } from "react-router";

export interface Params {
    [key: string]: string;
}

export type RoutePattern = string;
export type RouteComponent = ComponentClass<any> | StatelessComponent<any>;
export interface RouteComponents {
    [name: string]: RouteComponent;
}
export type RouteConfig = ReactNode | PlainRoute | PlainRoute[];

export type ParseQueryString = (queryString: Search) => Query;
export type StringifyQuery = (queryObject: Query) => Search;

type AnyFunction = (...args: any[]) => any;

export type EnterHook = (nextState: RouterState, replace: RedirectFunction, callback?: AnyFunction) => any;
export type LeaveHook = (prevState: RouterState) => any;
export type ChangeHook = (prevState: RouterState, nextState: RouterState, replace: RedirectFunction, callback?: AnyFunction) => any;
export type RouteHook = (nextLocation?: Location) => any;

export interface RedirectFunction {
    (location: LocationDescriptor): void;
    (state: LocationState, pathname: Pathname | Path, query?: Query): void;
}

export interface RouterState {
    location: Location;
    routes: PlainRoute[];
    params: Params;
    components: RouteComponent[];
}

type LocationFunction = (location: LocationDescriptor) => void;
type GoFunction = (n: number) => void;
type NavigateFunction = () => void;
type ActiveFunction = (location: LocationDescriptor, indexOnly?: boolean) => boolean;
type LeaveHookFunction = (route: any, callback: RouteHook) => void;
type CreatePartFunction<Part> = (path: Path, query?: any) => Part;

export interface InjectedRouter {
    push: LocationFunction;
    replace: LocationFunction;
    go: GoFunction;
    goBack: NavigateFunction;
    goForward: NavigateFunction;
    setRouteLeaveHook: LeaveHookFunction;
    createPath: CreatePartFunction<Path>;
    createHref: CreatePartFunction<Href>;
    isActive: ActiveFunction;
}

export interface RouteComponentProps<P, R, ComponentProps = any> {
    location: Location;
    params: P & R;
    route: PlainRoute<ComponentProps>;
    router: InjectedRouter;
    routes: PlainRoute[];
    routeParams: R;
}

export interface RouterProps extends ClassAttributes<any> {
    routes?: RouteConfig;
    history?: History;
    createElement?(component: RouteComponent, props: any): any;
    onError?(error: any): any;
    onUpdate?(): any;
    render?(props: any): ReactNode;
}

type Router = ComponentClass<RouterProps>;
declare const Router: Router;

export default Router;
