// Type definitions for laravel-vapor 0.6
// Project: https://github.com/laravel/vapor-js
// Definitions by: saibotk <https://github.com/saibotk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 2.9
//

interface VaporStoreOptions {
    bucket?: string | undefined;
    cancelToken?: string | undefined;
    contentType?: string | undefined;
    data?: any;
    expires?: string | undefined;
    visibility?: string | undefined;
    baseURL?: string | undefined;
    headers?: any;
    options?: any;
    progress?: (value: number) => void | undefined;
}

declare class Vapor {
    store(file: File, options?: VaporStoreOptions): Promise<any>;
    asset(path: string): string;
}

declare const VaporInstance: Vapor;
export = VaporInstance;
