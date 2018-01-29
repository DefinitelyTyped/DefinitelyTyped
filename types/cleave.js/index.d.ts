// Type definitions for cleave.js 1.1
// Project: https://github.com/nosir/cleave.js
// Definitions by: C Lentfort <https://github.com/clentfort>,
//                 J Giancono <https://github.com/jasongi-at-sportsbet>,
//                 Alex Shakun <https://github.com/sashashakun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { CleaveOptions } from './options';

declare class Cleave {
    constructor(selector: string, options: CleaveOptions);

    getRawValue(): string;

    setRawValue(value: string): void;

    getFormattedValue(): string;

    destroy(): void;

    setPhoneRegionCode(regionCode: string): void;
}

export = Cleave;
