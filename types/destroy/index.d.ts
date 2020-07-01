// Type definitions for destroy 1.0
// Project: https://github.com/stream-utils/destroy
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Stream } from 'stream';

export = destroy;

declare function destroy<T extends Stream>(stream: T): T;
