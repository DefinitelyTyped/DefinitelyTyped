// Type definitions for laravel-vapor 0.4
// Project: https://github.com/laravel/vapor-js
// Definitions by: saibotk <https://github.com/saibotk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 2.9
//

interface VaporStoreOptions {
    bucket?: string;
    contentType?: string;
    expires?: string;
    visibility?: string;
    baseURL?: string;
    headers?: any;
    options?: any;
}

declare class Vapor {
    store(file: File, options?: VaporStoreOptions): Promise<any>;
}

declare const VaporInstance: Vapor;
export = VaporInstance;
