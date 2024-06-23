/// <reference types="node" />

import { Transform, TransformOptions } from "stream";
import * as Chain from "stream-chain";

export = AsObjects;

declare class AsObjects extends Transform {
    constructor(options?: AsObjects.AsObjectOptions);
}

declare namespace AsObjects {
    interface AsObjectOptions extends TransformOptions {
        packValues?: boolean | undefined;
        packStrings?: boolean | undefined;
        streamValues?: boolean | undefined;
        streamStrings?: boolean | undefined;
        useValues?: boolean | undefined;
        useStringValues?: boolean | undefined;
        fieldPrefix?: string | undefined;
    }

    function make(options?: AsObjectOptions): AsObjects;

    namespace make {
        type Constructor = AsObjects;
        const Constructor: typeof AsObjects;
    }

    function asObjects(options?: AsObjectOptions): AsObjects;

    namespace asObjects {
        type Constructor = AsObjects;
        const Constructor: typeof AsObjects;
    }

    function withParser(options?: AsObjectOptions): Chain;
}
