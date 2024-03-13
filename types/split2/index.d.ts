/// <reference types="node" />

import { Transform, TransformOptions } from "stream";

declare function split(matcher: split.Matcher, Mapper: split.Mapper, options?: split.Options): Transform;
declare function split(mapper: split.Mapper, options?: split.Options): Transform;
// tslint:disable-next-line unified-signatures
declare function split(matcher: split.Matcher, options?: split.Options): Transform;
declare function split(options?: split.Options): Transform;

declare namespace split {
    interface Mapper {
        (line: string): any;
    }

    interface Options extends TransformOptions {
        maxLength?: number | undefined;
    }
    type Matcher = string | RegExp | { [Symbol.split](string: string, limit?: number): string[] };
}

export = split;
