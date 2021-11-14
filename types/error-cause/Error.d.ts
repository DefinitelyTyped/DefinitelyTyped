import BaseError from './base/Error';

declare class Error extends BaseError {
    constructor(reason?: string, options?: { cause?: unknown });

    cause: unknown;
}

export default Error;
