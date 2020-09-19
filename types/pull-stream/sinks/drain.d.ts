import pull = require('..');

/**
 * Drain the stream, calling op on each `data`. Call `done` when stream is finished. If `op` returns `=== false`, abort the stream.
 */
declare function drain<T>(op?: ((data: T) => unknown) | null, cb?: (err: pull.EndOrError) => unknown): pull.Sink<T>;
export = drain;
