import pull = require('..');

/**
 * Drain the stream and then call `cb` when done.
 */
declare function onEnd(cb?: (err: Error | null) => unknown): pull.Sink<any>;
export = onEnd;
