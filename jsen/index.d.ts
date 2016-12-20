// Type definitions for jsen (JSON Sentinel)
// Project: https://github.com/bugventure/jsen
// Definitions by: Vladimir Đokić <https://github.com/vladeck/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare namespace Jsen {

    export interface JsenFormats {
        [key: string]: string | RegExp | Function;
    }

    export interface JsenSettings {
        missing$Ref?: boolean;
        greedy?: boolean;
        formats?: JsenFormats;
        schemas?: any;
    }

    export interface JsenBuildSettings {
        copy?: boolean;
        additionalProperties?: boolean;
    }

    export interface JsenValidator {
        (data?: any): boolean;
        build(initial?: any, options?: JsenBuildSettings): any;
        errors: JsenValidateError[];
    }

    export interface JsenValidateError {
        path: string;
        keyword: string;
        message?: string;
    }

    export interface JsenUnique {
        (array: any[]): boolean;
        findIndex(array: any[], value: any, comparator: (obj1: any, obj2: any) => boolean): number;
    }

    export interface JsenMain {
        (schema?: any, options?: JsenSettings): JsenValidator;
        clone(data: any): any;
        equal(a: any, b: any): boolean;
        unique: JsenUnique;
    }
}

declare var Jsen: Jsen.JsenMain;
export = Jsen;
export as namespace jsen;
