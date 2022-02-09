// Type definitions for gulp-bump 2.8
// Project: https://github.com/stevelacy/gulp-bump, https://github.com/stevelacy/gulp-bump
// Definitions by: silkentrance <https://github.com/silkentrance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import * as BumpRegex from 'bump-regex';

declare function GulpBump(options?: BumpRegex.Options): NodeJS.ReadWriteStream;

declare namespace GulpBump {
}

export = GulpBump;
