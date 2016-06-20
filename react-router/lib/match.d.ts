import * as H from 'history';
import Router from './Router';

interface MatchArgs {
    routes?: Router.RouteConfig;
    history?: H.History;
    location?: H.Location | string;
    parseQueryString?: Router.ParseQueryString;
    stringifyQuery?: Router.StringifyQuery;
}
interface MatchState extends Router.RouterState {
    history: History;
}
export default function match(args: MatchArgs, cb: (error: any, nextLocation: H.Location, nextState: MatchState) => void): void;

