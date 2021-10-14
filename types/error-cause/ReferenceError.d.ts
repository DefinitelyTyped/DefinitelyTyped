import BaseReferenceError from './base/ReferenceError';

declare class ReferenceError extends BaseReferenceError {
    constructor(reason?: string, options?: { cause?: unknown });

    cause: unknown;
}

export default ReferenceError;
