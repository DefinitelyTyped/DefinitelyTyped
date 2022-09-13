export = RouteDef;
declare function RouteDef(): void;
declare class RouteDef {
    action: string;
    path: string;
    method: Method | Method[];
    requiresAuth: boolean;
    realm: string | number;
    allowedOrigins: string[];
    controller: string | number;
    debug: boolean;
    order: number;
    scope: string | string[];
}
declare namespace RouteDef {
    export { isLike, Method };
}
type Method = import('../http/Method');
declare function isLike(obj: any): boolean;
