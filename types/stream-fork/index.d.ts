// Type definitions for stream-fork 1.0
// Project: https://github.com/uhop/stream-fork#readme
// Definitions by: Michael de Wit <https://github.com/mjwwit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require("stream");

export = Fork;

declare class Fork extends stream.Writable {
  /**
   * A specialized Writable stream. It propagates every piece of data downstream to its dependent Writable streams (including Transform and Duplex streams).
   * @param outputs outputs is an array of Writable streams, which will be used duplicate written chunks or items.
   * @param options options is an options object, which is used to create a Writable stream.
   * Read all about it in Implementing a Writable stream. If it is not specified or falsy, {objectMode: true} is assumed. This default is useful for creating object mode streams.
   */
  constructor(outputs: ReadonlyArray<stream.Writable>, options?: Fork.ForkOptions);

  /**
   * It returns true if outputs property is empty, and false otherwise. If isEmpty() is true, it means that the stream do not duplicate data.
   */
  isEmpty(): boolean;

  /**
   * It is a factory function, which accepts the same arguments as the constructor, and returns a fully constructed Fork object.
   */
  static fork(outputs: ReadonlyArray<stream.Writable>, options?: Fork.ForkOptions): Fork;
}

declare namespace Fork {
    interface ForkOptions extends stream.WritableOptions {
        /**
         * ignoreErrors is a flag. When its value is truthy, a Fork instance never fails on write() silently ignoring downstream errors.
         * Otherwise, the first encountered downstream error is reported upstream as its own error. The default: false.
         */
        ignoreErrors?: boolean;
    }
}
