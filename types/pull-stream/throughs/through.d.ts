import pull = require('..');

/**
 * Returns a pass through stream that doesn't change the value.
 */
declare function through<InOut>(
    op?: (data: InOut) => unknown,
    onEnd?: (err: pull.EndOrError) => unknown,
): pull.Through<InOut, InOut>;
export = through;
