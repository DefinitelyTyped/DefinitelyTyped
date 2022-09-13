// Type definitions for stream-write 2.0
// Project: https://github.com/juliangruber/stream-write#readme
// Definitions by: Rajas Paranjpe <https://github.com/ChocolateLoverRaj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import { Writable } from 'stream';

declare function streamWrite(stream: Writable, chunk: any): Promise<boolean>;

export = streamWrite;
