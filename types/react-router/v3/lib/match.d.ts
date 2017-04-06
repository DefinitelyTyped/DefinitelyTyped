import { Basename, History, LocationDescriptor } from "history";
import { ParseQueryString, RouteConfig, StringifyQuery } from "react-router";

interface MatchArgs {
    routes: RouteConfig;
    basename?: Basename;
    parseQueryString?: ParseQueryString;
    stringifyQuery?: StringifyQuery;
}

interface MatchLocationArgs extends MatchArgs {
    location: LocationDescriptor;
    history?: History;
}

interface MatchHistoryArgs extends MatchArgs {
    location?: LocationDescriptor;
    history: History;
}

export type MatchCallback = (error: any, redirectLocation: Location, renderProps: any) => void;

export default function match(args: MatchLocationArgs | MatchHistoryArgs, cb: MatchCallback): void;
