// Type definitions for global-npm 0.4
// Project: https://github.com/dracupid/global-npm#readme
// Definitions by: Waseem Dahman <https://github.com/wsmd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="npm" />

import * as NPM from 'npm';

interface GlobalNPM {
    GLOBAL_NPM_PATH: string;
    GLOBAL_NPM_BIN: string;
}

declare var globalNPM: GlobalNPM & typeof NPM;
export = globalNPM;
