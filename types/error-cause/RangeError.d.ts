import BaseRangeError from './base/RangeError';

declare class RangeError extends BaseRangeError {
    constructor(reason?: string, options?: { cause?: unknown });

    cause: unknown;
}

export default RangeError;
