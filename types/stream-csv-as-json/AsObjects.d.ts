/// <reference types="node" />

import { TransformOptions, Transform } from 'stream';
import * as Chain from 'stream-chain';

export = AsObjects;

declare class AsObjects extends Transform {
    constructor(options?: AsObjects.AsObjectOptions);
}

declare namespace AsObjects {
    interface AsObjectOptions extends TransformOptions {
        packValues?: boolean;
        packStrings?: boolean;
        streamValues?: boolean;
        streamStrings?: boolean;
        useValues?: boolean;
        useStringValues?: boolean;
        fieldPrefix?: string;
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
