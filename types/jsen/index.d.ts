declare namespace Jsen {
    export interface JsenFormats {
        [key: string]: string | RegExp | Function;
    }

    export interface JsenSettings {
        missing$Ref?: boolean | undefined;
        greedy?: boolean | undefined;
        formats?: JsenFormats | undefined;
        schemas?: any;
    }

    export interface JsenBuildSettings {
        copy?: boolean | undefined;
        additionalProperties?: boolean | undefined;
    }

    export interface JsenValidator {
        (data?: any): boolean;
        build(initial?: any, options?: JsenBuildSettings): any;
        errors: JsenValidateError[];
    }

    export interface JsenValidateError {
        path: string;
        keyword: string;
        message?: string | undefined;
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
