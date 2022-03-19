import BaseError, { ErrorType } from './base/Error';

declare class Error extends BaseError {
    constructor(reason?: string, options?: { cause?: ErrorType | undefined });

    cause: ErrorType | undefined;
}

export default Error;
