export = Route;
declare function Route(opt_routeSet: RouteSet | null): void;
declare class Route {
    constructor(opt_routeSet: RouteSet | null);
    private routeSet_;
    private propertiesToAssign_;
    private matcher_;
    private pathParameters_;
    private action_;
    private paramRegExp_;
    private dynamicRegExp_;
    private typeRegExp_;
    parameterNames: string[];
    private updateMatcher_;
    assign(def: RouteDef | Record<any, any>): void;
    testScope(scope: string): boolean;
}
declare namespace Route {
    export { resolveGlobalParameter, parseAction, testScope, RouteSet };
}
type RouteSet = import('./RouteSet');
import RouteDef = require('./RouteDef.js');
declare var resolveGlobalParameter: any;
declare function parseAction(action: string): {
    action: string;
    method: string;
    parameters: any[];
    openParameters: any;
};
declare function testScope(
    scope: string | string[],
    requiredScope: string | string[]
): boolean;
