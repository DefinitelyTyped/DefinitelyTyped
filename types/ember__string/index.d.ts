// Type definitions for non-npm package @ember/string 3.16
// Project: https://emberjs.com/api/ember/3.16/modules/@ember%2Fstring
// Definitions by: Mike North <https://github.com/mike-north>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

export { htmlSafe, isHTMLSafe } from '@ember/template';

export function camelize(str: string): string;
export function capitalize(str: string): string;
export function classify(str: string): string;
export function dasherize(str: string): string;
export function decamelize(str: string): string;
export function loc(template: string, args?: string[]): string;
export function underscore(str: string): string;
export function w(str: string): string[];
