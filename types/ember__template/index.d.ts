// Type definitions for non-npm package @ember/template 4.0
// Project: https://emberjs.com/api/ember/4.0/modules/@ember%2Ftemplate
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Krystan HuffMenne <https://github.com/gitKrystan>
//                 James C. Davis <https://github.com/jamescdavis>
//                 Peter Wagenet <https://github.com/wagenet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import { SafeString } from './-private/handlebars';
export function htmlSafe(str: string): SafeString;
export function isHTMLSafe(str: unknown): str is SafeString;
