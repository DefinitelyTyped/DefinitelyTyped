import pull = require('..');

/**
 * Returns a pass through stream that doesn't change the value.
 */
declare function through<InOut>(op?: (data: InOut) => unknown, onEnd?: (err: Error | null) => unknown): pull.Through<InOut, InOut>;
export = through;
