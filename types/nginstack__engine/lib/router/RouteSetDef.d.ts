export = RouteSetDef;
declare function RouteSetDef(): void;
declare class RouteSetDef {
    routes: Array<import('./RouteDef') | import('./RouteSetDef')>;
    apiName: string;
    apiHelp: ResourceString;
    groupName: string;
    groupHelp: ResourceString;
    requiresAuth: boolean;
    realm: string | number;
    basePath: string;
    controller: string | number;
    allowedOrigins: string[];
    debug: boolean;
    order: number;
    scope: string | string[];
}
declare namespace RouteSetDef {
    export { isLike, ResourceString, RouteDef };
}
declare function isLike(obj: any): boolean;
type ResourceString = import('../i18n/ResourceString');
type RouteDef = import('./RouteDef');
