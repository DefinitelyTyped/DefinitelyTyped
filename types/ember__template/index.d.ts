// Type definitions for non-npm package @ember/template 3.0
// Project: https://emberjs.com/api/ember/3.12/modules/@ember%2Ftemplate
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { SafeString } from './-private/handlebars';
export function htmlSafe(str: string): SafeString;
export function isHTMLSafe(str: any): str is SafeString;
