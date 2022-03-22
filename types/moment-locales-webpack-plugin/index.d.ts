// Type definitions for moment-locales-webpack-plugin 1.2
// Project: https://github.com/iamakulov/moment-locales-webpack-plugin
// Definitions by: Ciarán Ingle <https://github.com/inglec-arista>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

/// <reference types="node" />
import { ContextReplacementPlugin } from 'webpack';

declare class MomentLocalesPlugin extends ContextReplacementPlugin {
    constructor(options?: {
        /** Ignore invalid or unsupported locales in `localesToKeep`. */
        ignoreInvalidLocales?: boolean | undefined;
        /** An array of locales to keep bundled (other locales are removed). */
        localesToKeep?: string[] | undefined;
    });
}

export = MomentLocalesPlugin;
