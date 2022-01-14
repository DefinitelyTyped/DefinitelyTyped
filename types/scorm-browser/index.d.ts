// Type definitions for non-npm package scorm-browser 1.0
// Project: http://xml.coverpages.org/SCORM-12-RunTimeEnv.pdf
// Definitions by: Christian Cook <https://github.com/CookieCookson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

import { SCORM12 } from './1.2';

export * from './1.2';

declare global {
    interface Window {
        API?: SCORM12;
    }
}
