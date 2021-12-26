// Type definitions for node-siege 0.0
// Project: https://github.com/npr/node-siege
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

declare class Siege extends EventEmitter {
    args(args: string): Siege;
    run(): Siege;
    validateArgs(): void;
    error(err: any): void;

    readonly running: boolean;
}

declare function siege(): Siege;

export = siege;
