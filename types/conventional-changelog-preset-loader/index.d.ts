// Type definitions for conventional-changelog-preset-loader 2.3
// Project: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-preset-loader#readme
// Definitions by: Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { Options as CoreOptions } from "conventional-changelog-core";
import { Commit } from "conventional-commits-parser";
import { Context as WriterContext } from "conventional-changelog-writer";

/**
 * The string that is passed to the preset loader is manipulated by prepending
 * `conventional-changelog` to the name.
 *
 * For example:
 *
 * * `angular` => `conventional-changelog-angular`
 * * `angular/preset/path` => `conventional-changelog-angular/preset/path`
 * * `@scope/angular` => `@scope/conventional-changelog-angular`
 * * `@scope/angular/preset/path` => `@scope/conventional-changelog-angular/preset/path`
 *
 * Will return whatever is exported by the preset package. That may be a
 * configuration object, a function, or a promise.
 *
 * @param path
 */
declare function conventionalChangelogPresetLoader(path: string | Config): CoreOptions.Config;

declare namespace conventionalChangelogPresetLoader {
    function presetLoader(requireMethod: presetLoader.RequireMethod): typeof conventionalChangelogPresetLoader;

    namespace presetLoader {
        type RequireMethod = (id: string) => any;
    }

    type Builder = (config: CoreOptions.Config.Object & Config) => CoreOptions.Config;

    interface Config {
        /**
         * The string that is passed to the preset loader is manipulated by prepending
         * `conventional-changelog` to the name.
         *
         * For example:
         *
         * * `angular` => `conventional-changelog-angular`
         * * `angular/preset/path` => `conventional-changelog-angular/preset/path`
         * * `@scope/angular` => `@scope/conventional-changelog-angular`
         * * `@scope/angular/preset/path` => `@scope/conventional-changelog-angular/preset/path`
         */
        name: string;
    }
}

type Config = conventionalChangelogPresetLoader.Config;

export = conventionalChangelogPresetLoader;
