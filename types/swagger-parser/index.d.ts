// Type definitions for swagger-parser 4.x
// Project: https://www.npmjs.com/package/swagger-parser
// Definitions by: Tobias Wolff <https://github.com/Tobias4872>
//                 Eric Henry <https://github.com/EricHenry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { Spec as Swagger } from 'swagger-schema-official';

export namespace SwaggerParser {
    let api: any;
    let $ref: any;
}

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

export function parse(api: string | Swagger, options?: Options): Promise<any>;
export function parse(api: string | Swagger, callback: (err: any, result?: any) => void): void;
export function parse(api: string | Swagger, options: Options, callback: (err: any, result?: any) => void): void;

export function validate(api: string | Swagger, options?: Options): Promise<any>;
export function validate(api: string | Swagger, callback: (err: any, result?: any) => void): void;
export function validate(api: string | Swagger, options: Options, callback: (err: any, result?: any) => void): void;

export function dereference(api: string | Swagger, options?: Options): Promise<any>;
export function dereference(api: string | Swagger, callback: (err: any, result?: any) => void): void;
export function dereference(api: string | Swagger, options: Options, callback: (err: any, result?: any) => void): void;

export function bundle(api: string | Swagger, options?: Options): Promise<any>;
export function bundle(api: string | Swagger, callback: (err: any, result?: any) => void): void;
export function bundle(api: string | Swagger, options: Options, callback: (err: any, result?: any) => void): void;

export function resolve(api: string | Swagger, options?: Options): Promise<any>;
export function resolve(api: string | Swagger, callback: (err: any, result?: any) => void): void;
export function resolve(api: string | Swagger, options: Options, callback: (err: any, result?: any) => void): void;
