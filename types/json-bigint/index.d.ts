// Type definitions for json-bigint 1.0
// Project: https://github.com/sidorares/json-bigint#readme
// Definitions by: yamachu <https://github.com/yamachu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const stringify: typeof JSON.stringify;
declare const parse: typeof JSON.parse;

declare function JSONBig(options?: Options): { parse: typeof parse; stringify: typeof stringify };

interface Options {
    /**
     * @default false
     */
    strict?: boolean | undefined;
    /**
     * @default false
     */
    storeAsString?: boolean | undefined;
    /**
     * @default false
     */
    alwaysParseAsBig?: boolean | undefined;
    /**
     * @default false
     */
    useNativeBigInt?: boolean | undefined;
    /**
     * @default 'error'
     */
    protoAction?: 'error' | 'ignore' | 'preserve' | undefined;
    /**
     * @default 'error'
     */
    constructorAction?: 'error' | 'ignore' | 'preserve' | undefined;
}

type JSONBigExport = typeof JSONBig & { parse: typeof parse; stringify: typeof stringify };

declare const _: JSONBigExport;
export = _;
