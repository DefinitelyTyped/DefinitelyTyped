// Type definitions for gulp-clean-css 4.3
// Project: https://github.com/scniro/gulp-clean-css#readme
// Definitions by: tqma <https://github.com/tqma113>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Options, Output } from 'clean-css';

declare namespace GulpCleanCss {
    interface Details {
        stats: Output['stats'];
        errors: Output['errors'];
        warnings: Output['warnings'];
        path: string;
        name: string;
    }
}

declare function GulpCleanCss(
    options?: Options,
    callback?: (details: GulpCleanCss.Details) => void,
): NodeJS.ReadWriteStream;

export = GulpCleanCss;
