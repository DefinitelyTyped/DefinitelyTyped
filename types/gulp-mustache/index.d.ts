// Type definitions for gulp-mustache v 3.0
// Project: https://github.com/rogeriopvl/gulp-mustache
// Definitions by: Christopher Durham <cad97@cad97.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from "stream";

declare namespace GulpMustache {
    type View = { [key: string]: string } | string | undefined;

    interface Partials {
        [key: string]: string;
    }

    interface Options {
        extension?: string;
        tags?: ReadonlyArray<string> | undefined;
    }
}

declare function GulpMustache(view: GulpMustache.View,
                              options?: GulpMustache.Options,
                              partials?: GulpMustache.Partials): Transform;

export = GulpMustache;
