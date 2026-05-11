/**
 * These are type definitions for the upcoming webpack v5 release.
 *
 * Webpack v5 is currently in beta so the v4 definitions should remain the
 * default exported types as long as v4 remains the stable version.
 *
 * This file exists to give contributors to DefinitelyTyped the ability to
 * update the types for webpack in advance of the v5 release.
 * Once v5 is promoted as stable release we can then move the v4 types
 * into an old version and apply the types from this file to the definitions
 * and publish them as v5.
 *
 * To load the types declared here in an actual project, there are three ways:
 * The easiest one, if your `tsconfig.json` already has a `"types"` array in
 * the `"compilerOptions"` section, is to add`"webpack/next"` to the `"types"`
 * array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript
 * file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'webpack/next'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="webpack/next" />
 * ```
 *
 * Either the import or the reference only needs to appear once,
 * anywhere in the project.
 */

import Webpack = require(".");

export {};

declare module "." {
    namespace Stats {
        interface ToStringOptionsObject {
            /**
             * preset for the default values
             */
            preset?: Preset | undefined;
        }
    }
}
