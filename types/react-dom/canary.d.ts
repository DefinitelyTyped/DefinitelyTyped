/* eslint-disable @definitelytyped/no-self-import -- self-imports in module augmentations aren't self-imports */
/* eslint-disable @definitelytyped/no-declare-current-package -- The module augmentations are optional */
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

declare module "react" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface CacheSignal extends AbortSignal {}
}

declare const POSTPONED_STATE_SIGIL: unique symbol;
declare module "react-dom/static" {
    /**
     * This is an opaque type i.e. users should not make any assumptions about its structure.
     * It is JSON-serializeable to be a able to store it and retrvieve later for use with {@link https://react.dev/reference/react-dom/server/resume `resume`}.
     */
    interface PostponedState {
        [POSTPONED_STATE_SIGIL]: never;
    }

    interface ResumeOptions {
        nonce?: string;
        signal?: AbortSignal;
        onError?: (error: unknown) => string | undefined | void;
    }

    interface PrerenderResult {
        postponed: null | PostponedState;
    }
    /**
     * @see {@link https://react.dev/reference/react-dom/static/resumeAndPrerender `resumeAndPrerender` reference documentation}
     * @version 19.2
     */
    function resumeAndPrerender(
        children: React.ReactNode,
        postponedState: PostponedState,
        options?: Omit<ResumeOptions, "nonce">,
    ): Promise<PrerenderResult>;

    interface PrerenderToNodeStreamResult {
        postponed: null | PostponedState;
    }
    /**
     * @see {@link https://react.dev/reference/react-dom/static/resumeAndPrerenderToNodeStream `resumeAndPrerenderToNodeStream`` reference documentation}
     * @version 19.2
     */
    function resumeAndPrerenderToNodeStream(
        children: React.ReactNode,
        postponedState: PostponedState,
        options?: Omit<ResumeOptions, "nonce">,
    ): Promise<PrerenderToNodeStreamResult>;
}

import { PostponedState, ResumeOptions } from "react-dom/static";
declare module "react-dom/server" {
    /**
     * @see {@link https://react.dev/reference/react-dom/server/resume `resume`` reference documentation}
     * @version 19.2
     */
    function resume(
        children: React.ReactNode,
        postponedState: PostponedState,
        options?: ResumeOptions,
    ): Promise<ReactDOMServerReadableStream>;
    /**
     * @see {@link https://react.dev/reference/react-dom/server/resumeToPipeableStream `resumeToPipeableStream`` reference documentation}
     * @version 19.2
     */
    function resumeToPipeableStream(
        children: React.ReactNode,
        postponedState: PostponedState,
        options?: ResumeOptions,
    ): Promise<PipeableStream>;
}
