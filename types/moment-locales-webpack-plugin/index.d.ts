/// <reference types="node" />
import { ContextReplacementPlugin } from "webpack";

declare class MomentLocalesPlugin extends ContextReplacementPlugin {
    constructor(options?: {
        /** Ignore invalid or unsupported locales in `localesToKeep`. */
        ignoreInvalidLocales?: boolean | undefined;
        /** An array of locales to keep bundled (other locales are removed). */
        localesToKeep?: string[] | undefined;
    });
}

export = MomentLocalesPlugin;
