import BaseReferenceError from './base/ReferenceError';

declare class ReferenceError extends BaseReferenceError {
    constructor(reason?: string, options?: { cause?: Error | undefined });

    cause: Error | undefined;
}

export default ReferenceError;
