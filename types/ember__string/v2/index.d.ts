// Type definitions for non-npm package @ember/string 2.0
// Project: https://www.npmjs.com/package/@ember/string
// Definitions by: Mike North <https://github.com/mike-north>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { htmlSafe as templateHtmlSafe, isHTMLSafe as templateIsHTMLSafe } from '@ember/template';

export function camelize(str: string): string;
export function capitalize(str: string): string;
export function classify(str: string): string;
export function dasherize(str: string): string;
export function decamelize(str: string): string;
export function loc(template: string, args?: string[]): string;
export function underscore(str: string): string;
export function w(str: string): string[];

declare module '@ember/string' {
  function htmlSafe(...args: Parameters<typeof templateHtmlSafe>): ReturnType<typeof templateHtmlSafe>;
  function isHTMLSafe(...args: Parameters<typeof templateIsHTMLSafe>): ReturnType<typeof templateIsHTMLSafe>;
}
