/**
 * These are types for things that are present in the upcoming React 18 release.
 *
 * Once React 18 is released they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react-dom/canary"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react-dom/canary'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react-dom/canary" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/main/packages/react-dom/index.js to see how the exports are declared,
// but confirm with published source code (e.g. https://unpkg.com/react-dom@canary) that these exports end up in the published code

import React = require("react");
import ReactDOM = require(".");

export {};

declare module "." {
    function prefetchDNS(href: string): void;

    interface PreconnectOptions {
        // Don't create a helper type.
        // It would have to be in module scope to be inlined in TS tooltips.
        // But then it becomes part of the public API.
        // TODO: Upstream to microsoft/TypeScript-DOM-lib-generator -> w3c/webref
        // since the spec has a notion of a dedicated type: https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attribute
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    }
    function preconnect(href: string, options?: PreconnectOptions): void;

    type PreloadAs =
        | "audio"
        | "document"
        | "embed"
        | "fetch"
        | "font"
        | "image"
        | "object"
        | "track"
        | "script"
        | "style"
        | "video"
        | "worker";
    interface PreloadOptions {
        as: PreloadAs;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        fetchPriority?: "high" | "low" | "auto" | undefined;
        // TODO: These should only be allowed with `as: 'image'` but it's not trivial to write tests against the full TS support matrix.
        imageSizes?: string | undefined;
        imageSrcSet?: string | undefined;
        integrity?: string | undefined;
        nonce?: string | undefined;
        referrerPolicy?: ReferrerPolicy | undefined;
    }
    function preload(href: string, options?: PreloadOptions): void;

    // https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload
    type PreloadModuleAs = RequestDestination;
    interface PreloadModuleOptions {
        /**
         * @default "script"
         */
        as: PreloadModuleAs;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        integrity?: string | undefined;
        nonce?: string | undefined;
    }
    function preloadModule(href: string, options?: PreloadModuleOptions): void;

    type PreinitAs = "script" | "style";
    interface PreinitOptions {
        as: PreinitAs;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        fetchPriority?: "high" | "low" | "auto" | undefined;
        precedence?: string | undefined;
        integrity?: string | undefined;
        nonce?: string | undefined;
    }
    function preinit(href: string, options?: PreinitOptions): void;

    // Will be expanded to include all of https://github.com/tc39/proposal-import-attributes
    type PreinitModuleAs = "script";
    interface PreinitModuleOptions {
        /**
         * @default "script"
         */
        as?: PreinitModuleAs;
        crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
        integrity?: string | undefined;
        nonce?: string | undefined;
    }
    function preinitModule(href: string, options?: PreinitModuleOptions): void;
}
