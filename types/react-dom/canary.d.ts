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
import { ErrorInfo } from "./client";

export {};

declare const browserUsable: unique symbol;

export interface BrowserUsable {
    readonly [browserUsable]: never;
}

declare module "." {
    /**
     * Creates an opaque Usable that opts a subtree into browser-only rendering.
     * `reason` is diagnostic metadata: an SSR renderer uses it as the `cause` of
     * the recoverable error it reports when deferring the subtree to the browser.
     * A function is called lazily by that renderer; in the browser the reason is
     * never observed.
     */
    function browser(reason?: string | (() => unknown)): BrowserUsable;
}

declare module "./server" {
    interface RenderToPipeableStreamOptions {
        /**
         * A callback React calls when it recovers from `browser()` by leaving a
         * Suspense fallback for the browser to replace.
         */
        onBrowserBailout?: ((error: unknown, errorInfo: ErrorInfo) => void) | undefined;
    }

    interface RenderToReadableStreamOptions {
        /**
         * A callback React calls when it recovers from `browser()` by leaving a
         * Suspense fallback for the browser to replace.
         */
        onBrowserBailout?: ((error: unknown, errorInfo: ErrorInfo) => void) | undefined;
    }

    interface ResumeToPipeableStreamOptions {
        /**
         * A callback React calls when it recovers from `browser()` by leaving a
         * Suspense fallback for the browser to replace.
         */
        onBrowserBailout?: ((error: unknown, errorInfo: ErrorInfo) => void) | undefined;
    }
}

declare module "./static" {
    interface PrerenderOptions {
        /**
         * A callback React calls when it recovers from `browser()` by leaving a
         * Suspense fallback for the browser to replace.
         */
        onBrowserBailout?: ((error: unknown, errorInfo: ErrorInfo) => void) | undefined;
    }

    interface ResumeOptions {
        /**
         * A callback React calls when it recovers from `browser()` by leaving a
         * Suspense fallback for the browser to replace.
         */
        onBrowserBailout?: ((error: unknown, errorInfo: ErrorInfo) => void) | undefined;
    }
}

declare module "react" {
    interface RendererUsable<T> {
        "react-dom/browser": BrowserUsable;
    }

    // @enableViewTransition
    interface ViewTransitionPseudoElement extends Animatable {
        getComputedStyle: () => CSSStyleDeclaration;
    }

    interface ViewTransitionInstance {
        group: ViewTransitionPseudoElement;
        imagePair: ViewTransitionPseudoElement;
        old: ViewTransitionPseudoElement;
        new: ViewTransitionPseudoElement;
    }

    // @enableFragmentRefs
    interface FragmentInstance {
        blur: () => void;
        focus: (focusOptions?: FocusOptions | undefined) => void;
        focusLast: (focusOptions?: FocusOptions | undefined) => void;
        observeUsing(observer: IntersectionObserver | ResizeObserver): void;
        unobserveUsing(observer: IntersectionObserver | ResizeObserver): void;
        getClientRects(): Array<DOMRect>;
        getRootNode(getRootNodeOptions?: GetRootNodeOptions | undefined): Document | ShadowRoot | FragmentInstance;
        addEventListener(
            type: string,
            listener: EventListener,
            optionsOrUseCapture?: Parameters<Element["addEventListener"]>[2],
        ): void;
        removeEventListener(
            type: string,
            listener: EventListener,
            optionsOrUseCapture?: Parameters<Element["removeEventListener"]>[2],
        ): void;
        dispatchEvent(event: Event): boolean;
        scrollIntoView(alignToTop?: boolean): void;
    }
}
