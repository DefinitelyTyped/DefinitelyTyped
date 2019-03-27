// Type definitions for cleave.js 1.4
// Project: https://github.com/nosir/cleave.js
// Definitions by: C Lentfort <https://github.com/clentfort>,
//                 J Giancono <https://github.com/jasongi-at-sportsbet>,
//                 Alex Shakun <https://github.com/sashashakun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { CleaveOptions } from './options';

declare class Cleave {
    constructor(selector: string | HTMLElement, options: CleaveOptions);

    getRawValue(): string;

    setRawValue(value: string): void;

    getFormattedValue(): string;

    getISOFormatDate(): string;

    destroy(): void;

    setPhoneRegionCode(regionCode: string): void;
}

export = Cleave;
