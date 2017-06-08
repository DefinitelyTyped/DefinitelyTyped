// Type definitions for jquery-param v1.0.0
// Project: https://github.com/knowledgecode/jquery-param
// Definitions by: Pat Sissons <http://github.com/patsissons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ParamFn {
    (obj: any): string;
}

declare var param: ParamFn;

declare module "jquery-param" {
    export = param
}
