export = Route;
declare function Route(opt_routeSet: any): void;
declare class Route {
    constructor(opt_routeSet: any);
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
    const resolveGlobalParameter: any;
    function parseAction(action: string): {
        action: string;
        method: string;
        parameters: any[];
        openParameters: any;
    };
    function testScope(scope: string | string[], requiredScope: string | string[]): boolean;
}
import RouteDef = require('./RouteDef.js');
