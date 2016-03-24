// Type definitions for jsen (JSON Sentinel)
// Project: https://github.com/bugventure/jsen
// Definitions by: Vladimir Đokić <https://github.com/vladeck/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IJsenFormats {
    [key: string]: string | RegExp | Function;
}

interface IJsenSettings {
    missing$Ref?: boolean;
    greedy?: boolean;
    formats?: IJsenFormats;
    schemas?: any;
}

interface IJsenBuildSettings {
    copy?: boolean;
    additionalProperties?: boolean;
}

interface IJsenValidator {
    (data?: any): boolean;
    build(initial?: any, options?: IJsenBuildSettings): any;
    errors: IValidateError[];
}

interface IValidateError {
    path: string;
    keyword: string;
    message?: string;
}

interface IJsenUnique {
    (array: any[]): boolean;
    findIndex(array: any[], value: any, comparator: (obj1: any, obj2: any) => boolean): number;
}
interface IJsen {
    (schema?: any, options?: IJsenSettings): IJsenValidator;
    clone(data: any): any;
    equal(a: any, b: any): boolean;
    unique: IJsenUnique;
}

declare var jsen: IJsen;
