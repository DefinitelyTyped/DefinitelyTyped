// Type definitions for uuid-browser 3.1
// Project: https://github.com/heikomat/uuid-browser
// Definitions by: Emily Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import { v1, v4 } from './interfaces';

interface UuidStatic {
    v1: v1;
    v4: v4;
}

declare const uuid_browser: UuidStatic & v4;
export = uuid_browser;
