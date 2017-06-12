// Type definitions for swagger-parser 4.x
// Project: https://www.npmjs.com/package/swagger-parser
// Definitions by: Tobias Wolff <https://github.com/Tobias4872/>
//                 Eric Henry <https://github.com/EricHenry/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export module SwaggerParser {}

export interface Options {
    allow?: {
        json?: boolean;
        yaml?: boolean;
        empty?: boolean;
        unknown?: boolean;
    };
    $ref?: {
        internal?: boolean;
        external?: boolean;
        circular?: boolean | 'ignore';
    };
    validate?: {
        schema?: boolean;
        spec?: boolean;
    };
    cache?: {
        fs?: number;
        http?: number;
        https?: number;
    };
}

export function parse(api: string | any, options?: Options): Promise<any>;
export function parse(api: string | any, callback: (err: any, result?: any) => void): void;
export function parse(api: any, options: Options, callback: (err: any, result?: any) => void): void;

export function validate(api: string | any, options?: Options): Promise<any>;
export function validate(api: string | any, callback: (err: any, result?: any) => void): void;
export function validate(api: string | any, options: Options, callback: (err: any, result?: any) => void): void;

export function dereference(api: string | any, options?: Options): Promise<any>;
export function dereference(api: string | any, callback: (err: any, result?: any) => void): void;
export function dereference(api: any, options: Options, callback: (err: any, result?: any) => void): void;

export function bundle(api: string | any, options?: Options): Promise<any>;
export function bundle(api: string | any, callback: (err: any, result?: any) => void): void;
export function bundle(api: string | any, options: Options, callback: (err: any, result?: any) => void): void;

export function resolve(api: string | any, options?: Options): Promise<any>;
export function resolve(api: string | any, callback: (err: any, result?: any) => void): void;
export function resolve(api: string | any, options: Options, callback: (err: any, result?: any) => void): void;
