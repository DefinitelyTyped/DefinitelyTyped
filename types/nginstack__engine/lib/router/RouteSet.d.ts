export = RouteSet;
declare function RouteSet(opt_base: RouteSet | null): void;
declare class RouteSet {
    constructor(opt_base: RouteSet | null);
    private base_;
    private propertiesToAssign_;
    getAllRoutes(): Route[];
    assign(def: RouteSetDef): void;
    routes: any[];
}
import Route = require('./Route.js');
import RouteSetDef = require('./RouteSetDef.js');
