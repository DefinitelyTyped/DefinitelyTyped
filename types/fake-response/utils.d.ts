import { DataType, Injectors, Middleware, ConfigDelay, ConfigMiddleware } from "./model";
export declare class Utils {
    protected getInjector: (route: string, injectors: Injectors[], type: string) => Middleware | number | undefined;
    protected getConfigMiddleware: (middleware: any, d_middleware: any) => ConfigMiddleware;
    protected getConfigDelay: (delay: any, d_delay: any) => ConfigDelay;
    protected getValidDataType: (dataType: DataType) => string;
    protected getValidMiddlewares: (middlewares: any, len: any) => Array<Middleware | undefined>;
    protected getValidDelays: (delays: any, len: any) => Array<number | undefined>;
    getValidRoutes: (routes: any) => string[];
    getValidRoute: (route: any) => string;
}
