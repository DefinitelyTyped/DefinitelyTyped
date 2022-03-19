import BaseRangeError from './base/RangeError';

declare class RangeError extends BaseRangeError {
    constructor(reason?: string, options?: { cause?: Error | undefined });

    cause: Error | undefined;
}

export default RangeError;
