// Type definitions for stream-to-array 2.3
// Project: https://github.com/stream-utils/stream-to-array
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = toArray;

declare function toArray(this: NodeJS.ReadableStream, callback?: (err: any, arr: any[]) => void): Promise<any[]>;
declare function toArray(stream: NodeJS.ReadableStream, callback?: (err: any, arr: any[]) => void): Promise<any[]>;
