// Type definitions for gulp-terser 1.2
// Project: https://github.com/duan602728596/gulp-terser#readme
// Definitions by: Jeroen "Favna" Claassens <https://github.com/favna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node"/>

import { MinifyOptions } from 'terser';

export = terser;

declare function terser(options?: MinifyOptions): NodeJS.ReadWriteStream;
