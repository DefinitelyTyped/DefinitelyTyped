// Type definitions for uniq
// Project: https://www.npmjs.com/package/uniq
// Definitions by: Hans Windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Compare<T> = (a: T, b: T) => number;

interface Uniq {
    <T>(ip: Array<T>, compare?: Compare<T>, sorted?: boolean): Array<T>;
}

declare var uniq: Uniq;

declare module "uniq" {
    export = uniq;
}
