import { History } from "history";
import { Basename, LocationDescriptor, ParseQueryString, RouteConfig, StringifyQuery } from "react-router";

interface MatchArgs {
    routes: RouteConfig;
    location: LocationDescriptor;
    history?: History;
    basename?: Basename;
    parseQueryString?: ParseQueryString;
    stringifyQuery?: StringifyQuery;
}

export type MatchCallback = (error: any, redirectLocation: Location, renderProps: any) => void;

export default function match(args: MatchArgs, cb: MatchCallback): void;

