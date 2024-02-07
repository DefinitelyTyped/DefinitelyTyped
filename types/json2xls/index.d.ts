type Json = string | number | boolean | { [key: string]: Json } | Json[];

interface FieldConfig {
    [key: string]: string;
}

interface Config {
    fields?: string[] | FieldConfig;
    style?: string;
}

interface GenericBuffer<T = any> extends Buffer {
    json: T;
}

declare function json2xls(json: any, options?: Config): GenericBuffer;

declare namespace json2xls {
    function transform<T = Json>(json: T[], config?: Config): GenericBuffer<T[]>;

    function getType(obj: Json, type?: string): string;
    function getByString(object: Json, path: string): Json | undefined;
    function prepareJson<T = Json>(json: T[], config?: Config): T[];
    function middleware(
        req: import("@types/express").Request,
        res: import("@types/express").Response,
        next: import("@types/express").NextFunction,
    ): void;

    export { Config, FieldConfig, Json };

    export { getByString, getType, middleware, prepareJson, transform };
}

// Export the main transform function as the default export
// and still provide access to the utility functions via the namespace
export = json2xls;
