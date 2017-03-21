// Type definitions for bufferstream 0.6
// Project: https://github.com/dodo/node-bufferstream
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require('stream');

export = BufferStream;

declare class BufferStream extends stream.Duplex {
	constructor(options?: BufferStream.Opts);

	/*
		different buffer behaviors can be triggered by size:

		none when output drains, bufferstream drains too
		flexible buffers everthing that it gets and not piping out
		<number> TODO buffer has given size. buffers everthing until buffer is full. when buffer is full then the stream will drain
	*/
	setSize(size: string | number): void; // can be one of ['none', 'flexible', <number>]
	/*
		enables stream buffering default
	*/
	enable(): void;
	/*
		flushes buffer and disables stream buffering. BufferStream now pipes all data as long as the output accepting data. when the output is draining BufferStream will buffer all input temporary.

		token[s] buffer splitters (should be String or Buffer)

		disables given tokens. wont flush until no splitter tokens are left.
	*/
	disable(tokens?: string[] | Buffer[]): void;
	disable(token: string, ...tokens: string[]): void;
	disable(token: Buffer, ...tokens: Buffer[]): void;
	/*
		each time BufferStream finds a splitter token in the input data it will emit a split event. this also works for binary data.

		token[s] buffer splitters (should be String or Buffer)
	*/
	split(tokens: string[] | Buffer[]): void;
	split(token: string, ...tokens: string[]): void;
	split(token: Buffer, ...tokens: Buffer[]): void;
	/*
		returns Buffer.
	*/
	getBuffer(): Buffer;
	/*
		returns Buffer.
	*/
	buffer: Buffer;
	/*
		shortcut for buffer.toString()
	*/
	toString(): string;
	/*
		shortcut for buffer.length
	*/
	length: number;
} // https://github.com/dodo/node-bufferstream/blob/master/src/buffer-stream.coffee#L28

declare namespace BufferStream {
	interface Opts {
		/*
			default encoding for writing strings
		*/
		encoding?: string;
		/*
			if true and the source is a child_process the stream will block the entire process (timeouts wont work anymore, but splitting and listening on data still works, because they work sync)
		*/
		blocking?: boolean;
		/*
			defines buffer level or sets buffer to given size (see ↓setSize for more)
		*/
		size?: any;
		/*
			immediately call disable
		*/
		disabled?: boolean;
		/*
			short form for:
			split(token, function (chunk) {emit('data', chunk)})
		*/
		// String or Buffer
		split?: any;
	}
	const fn: {warn: boolean};
}
