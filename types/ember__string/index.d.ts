// Type definitions for non-npm package @ember/string 3.0
// Project: https://emberjs.com/api/ember/3.4/modules/@ember%2Fstring
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { SafeString } from "./-private/handlebars";

export function camelize(str: string): string;
export function capitalize(str: string): string;
export function classify(str: string): string;
export function dasherize(str: string): string;
export function decamelize(str: string): string;
export function htmlSafe(str: string): SafeString;
export function isHTMLSafe(str: any): str is SafeString;
export function loc(template: string, args?: string[]): string;
export function underscore(str: string): string;
export function w(str: string): string[];
