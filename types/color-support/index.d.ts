/// <reference types="node" />

type ColorSupportLevel = 0 | 1 | 2 | 3;

interface ColorSupportOptions {
    alwaysReturn?: boolean | undefined;
    env?: NodeJS.ProcessEnv | undefined;
    ignoreCI?: boolean | undefined;
    ignoreDumb?: boolean | undefined;
    ignoreTTY?: boolean | undefined;
    level?: ColorSupportLevel | undefined;
    stream?: NodeJS.WriteStream | undefined;
    term?: string | undefined;
}

interface ColorSupportResult {
    level: ColorSupportLevel;
    hasBasic: boolean;
    has256: boolean;
    has16m: boolean;
}

type ColorSupport = (options?: ColorSupportOptions, obj?: ColorSupportResult) => false | ColorSupportResult;

declare var colorSupport: ColorSupport;

export = colorSupport;
