// Type definitions for non-npm package @ember/template 3.16
// Project: https://emberjs.com/api/ember/3.16/modules/@ember%2Ftemplate
// Definitions by: Mike North <https://github.com/mike-north>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { SafeString } from './-private/handlebars';
export function htmlSafe(str: string): SafeString;
export function isHTMLSafe(str: any): str is SafeString;
