import * as H from 'history';
import Router from './Router';

interface MatchArgs {
    routes?: Router.RouteConfig | undefined;
    history?: H.History | undefined;
    location?: H.Location | string | undefined;
    parseQueryString?: Router.ParseQueryString | undefined;
    stringifyQuery?: Router.StringifyQuery | undefined;
}
interface MatchState extends Router.RouterState {
    history: H.History;
    router: Router;
    createElement: (component: Router.RouteComponent, props: Object) => any;
}
export default function match(args: MatchArgs, cb: (error: any, nextLocation: H.Location, nextState: MatchState) => void): void;

