declare module "json-merge-patch" {
    function apply(target: any, patch: null): null;
    function apply<U>(target: any, patch: U): U;
    function apply<T>(target: T, patch: T): T;

    function generate(before: any, after: null): null;
    function generate<U>(before: any, after: U): U | undefined;
    function generate<T>(before: T, after: T): T | undefined;

    function merge(patch1: any, patch2: null): null;
    function merge<T>(patch1: T, patch2: T): T;
}
