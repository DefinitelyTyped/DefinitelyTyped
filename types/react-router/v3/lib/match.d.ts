import { Basename, History, LocationDescriptor } from "history";
import { ParseQueryString, RouteConfig, StringifyQuery } from "react-router";

export interface MatchArgs {
    routes: RouteConfig;
    basename?: Basename;
    parseQueryString?: ParseQueryString;
    stringifyQuery?: StringifyQuery;
}

export interface MatchLocationArgs extends MatchArgs {
    location: LocationDescriptor;
    history?: History;
}

export interface MatchHistoryArgs extends MatchArgs {
    location?: LocationDescriptor;
    history: History;
}

export type MatchCallback = (error: any, redirectLocation: Location, renderProps: any) => void;

export default function match(args: MatchLocationArgs | MatchHistoryArgs, cb: MatchCallback): void;
