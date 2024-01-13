/// <reference types="node" />

import { Transform } from "stream";

declare namespace GulpMustache {
    type View = Hash | string | undefined;

    interface Hash {
        [key: string]: any;
    }

    interface Options {
        extension?: string | undefined;
        tags?: readonly string[] | undefined;
    }
}

declare function GulpMustache(
    view: GulpMustache.View,
    options?: GulpMustache.Options,
    partials?: GulpMustache.Hash,
): Transform;

export = GulpMustache;
