// Type definitions for element-ready 2.1
// Project: https://github.com/sindresorhus/element-ready#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import pCancelable = require('p-cancelable');

export = elementReady;

declare function elementReady(selector: string): pCancelable.PCancelable<HTMLElement>;
