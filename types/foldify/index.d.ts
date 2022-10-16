// Type definitions for foldify
// Project: https://github.com/cellvia/foldify
// Definitions by: Ufuk Bakan <https://github.com/ufukbakan>
declare function fold<T = any>(path: string | string[]): { [key: string]: T };
declare module "foldify" {
    export = fold;
}