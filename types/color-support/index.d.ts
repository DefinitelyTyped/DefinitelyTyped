// Type definitions for color-support 1.1
// Project: https://github.com/isaacs/color-support#readme
// Definitions by: Guketlev Dmitry <https://github.com/Yavanosta>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import { WriteStream } from 'tty';

type ColorSupportLevel = 0 | 1 | 2 | 3;

interface ColorSupportOptions {
    alwaysReturn?: boolean;
    env?: NodeJS.ProcessEnv;
    ignoreCI?: boolean;
    ignoreDumb?: boolean;
    ignoreTTY?: boolean;
    level?: ColorSupportLevel;
    stream?: WriteStream;
    term?: string;
}

interface ColorSupportResult {
    level: ColorSupportLevel;
    hasBasic: boolean;
    has256: boolean;
    has16m: boolean;
}

type ColorSupport = (options?: ColorSupportOptions,
                     obj?: ColorSupportResult) => false | ColorSupportResult;

declare var colorSupport: ColorSupport;

export = colorSupport;
