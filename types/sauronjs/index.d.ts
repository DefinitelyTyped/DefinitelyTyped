// Type definitions for sauronjs 0.1
// Project: https://github.com/Fullscript/sauronjs
// Definitions by: EricPMulligan <https://github.com/EricPMulligan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import * as util from './util';
export { cache, Component, instance, next, Service } from './core';

interface SauronDOM {
    update(): void;
}

interface SauronEvents {
    dom: SauronDOM;
}

declare const events: SauronEvents;
export { events, util };
