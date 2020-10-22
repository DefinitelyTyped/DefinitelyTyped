// Type definitions for destroy-on-hwm 1.0
// Project: https://github.com/stream-utils/destroy-on-hwm
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />
import { Writable } from 'stream';

export = destroyOnHwm;

declare function destroyOnHwm<T extends Writable>(stream: T, callback?: (this: T, stream: T) => void): T;
