// Type definitions for through2 v 2.0
// Project: https://github.com/rvagg/through2
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, jedmao <https://github.com/jedmao>, Georgios Valotasios <https://github.com/valotas>
//                 Ben Chauvette < https://github.com/bdchauvette>, TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require('stream');

type TransformCallback = (err?: any, data?: any) => void;
type TransformFunction = (this: stream.Transform, chunk: any, enc: string, callback: TransformCallback) => void;
type FlushCallback = (this: stream.Transform, flushCallback: () => void) => void;

declare function through2(transform?: TransformFunction, flush?: FlushCallback): stream.Transform;
declare function through2(opts?: stream.DuplexOptions, transform?: TransformFunction, flush?: FlushCallback): stream.Transform;

declare namespace through2 {
    interface Through2Constructor extends stream.Transform {
        new (opts?: stream.DuplexOptions): stream.Transform;
        (opts?: stream.DuplexOptions): stream.Transform;
    }

	/**
	 * Convenvience method for creating object streams
	 */
    function obj(transform?: TransformFunction, flush?: FlushCallback): stream.Transform;

	/**
	 * Creates a constructor for a custom Transform. This is useful when you
	 * want to use the same transform logic in multiple instances.
	 */
    function ctor(transform?: TransformFunction, flush?: FlushCallback): Through2Constructor;
    function ctor(opts?: stream.DuplexOptions, transform?: TransformFunction, flush?: FlushCallback): Through2Constructor;
}

export = through2;
