/**
 * These are types for things that are present in the `experimental` builds of React but not yet
 * on a stable build.
 *
 * Once they are promoted to stable they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react/experimental"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react/experimental'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react/experimental" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/master/packages/react/src/React.js to see how the exports are declared,
// and https://github.com/facebook/react/blob/master/packages/shared/ReactFeatureFlags.js to verify which APIs are
// flagged experimental or not. Experimental APIs will be tagged with `__EXPERIMENTAL__`.
//
// For the inputs of types exported as simply a fiber tag, the `beginWork` function of ReactFiberBeginWork.js
// is a good place to start looking for details; it generally calls prop validation functions or delegates
// all tasks done as part of the render phase (the concurrent part of the React update cycle).
//
// Suspense-related handling can be found in ReactFiberThrow.js.

import React = require('./alpha');

export {};

declare const UNDEFINED_VOID_ONLY: unique symbol;
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

declare module '.' {
    const opaqueIdentifierBranding: unique symbol;
    /**
     * WARNING: Don't use this as a `string`.
     *
     * This is an opaque type that is not supposed to type-check structurally.
     * It is only valid if returned from React methods and passed to React e.g. `<button aria-labelledby={opaqueIdentifier} />`
     */
    // We can't create a type that would be rejected for string concatenation or `.toString()` calls.
    // So in order to not have to add `string | OpaqueIdentifier` to every react-dom host prop we intersect it with `string`.
    type OpaqueIdentifier = string & {
        readonly [opaqueIdentifierBranding]: unknown;
        // While this would cause `const stringified: string = opaqueIdentifier.toString()` to not type-check it also adds completions while typing.
        // It would also still allow string concatenation.
        // Unsure which is better. Not type-checking or not suggesting.
        // toString(): void;
    };

    export function unstable_useOpaqueIdentifier(): OpaqueIdentifier;
}
