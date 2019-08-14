// Type definitions for unique-hash-stream 1.0
// Project: https://github.com/stream-utils/unique-hash-stream
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Transform } from 'stream';

export = UniqueFactory;

declare function UniqueFactory(hashingFn?: (doc: any) => string): Transform;

declare namespace UniqueFactory {
    const Unique: typeof Transform;
    function calculate(doc: any): string;
}
