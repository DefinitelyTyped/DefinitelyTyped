declare namespace _exports {
    export { ParseOptions };
}
declare function _exports(value: string, options?: ParseOptions): number;
export = _exports;
interface ParseOptions {
    locale?: 'pt-br' | 'en-us';
    minPrecision?: number;
    maxPrecision?: number;
}
