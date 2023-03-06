// Type definitions for jsonp-body 1.0
// Project: https://github.com/node-modules/jsonp-body
// Definitions by: Qingrong Ke <https://github.com/keqingrong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jsonp {
    interface Options {
        /** length limit for callback function name, default to `512` */
        limit?: number;
        /** replacer in `JSON.stringify(obj, [replacer, [space]])` */
        replacer?: Parameters<typeof JSON.stringify>[1];
        /** space in `JSON.stringify(obj, [replacer, [space]])` */
        space?: Parameters<typeof JSON.stringify>[2];
    }
}

declare function jsonp(obj: any, callback?: string | string[], options?: jsonp.Options): string;

export = jsonp;
