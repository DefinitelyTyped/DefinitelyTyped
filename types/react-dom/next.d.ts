/**
 * These are types for things that are present in the upcoming React 18 release.
 *
 * Once React 18 is released they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react-dom/next"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react-dom/next'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react-dom/next" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/main/packages/react-dom/index.js to see how the exports are declared,
// but confirm with published source code (e.g. https://unpkg.com/react-dom@next) that these exports end up in the published code

import React = require('react');
import ReactDOM = require('.');

export {};

declare module '.' {
    type PreloadAs = 'font' | 'script' | 'style';
    interface PreloadOptions {
        as: PreloadAs;
        crossOrigin?: string | undefined;
        integrity?: string | undefined;
    }
    function preload(href: string, options?: PreloadOptions): void;

    type PreinitAs = 'script' | 'style';
    interface PreinitOptions {
        as: PreinitAs;
        crossOrigin?: string | undefined;
        precedence?: string | undefined;
        integrity?: string | undefined;
        nonce?: string | undefined;
    }
    function preinit(href: string, options?: PreinitOptions): void;
}
