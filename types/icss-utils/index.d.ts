// Type definitions for icss-utils 5.1
// Project: https://github.com/css-modules/icss-utils#readme
// Definitions by: Bob Matcuk <https://github.com/bmatcuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Container, Rule } from "postcss";

export interface Replacements {
    [key: string]: string;
}

export interface CSSImports {
    [key: string]: { [key: string]: string };
}

export interface CSSExports {
    [key: string]: string;
}

export interface ExtractedICSS {
    icssImports: CSSImports;
    icssExports: CSSExports;
}

export function replaceValueSymbols(value: string, replacements: Replacements): string;

export function replaceSymbols(css: Container, replacements: Replacements): void;

export function extractICSS(css: Container, removeRules?: boolean): ExtractedICSS;

export function createICSSRules(imports: CSSImports, exports: CSSExports): Rule[];
