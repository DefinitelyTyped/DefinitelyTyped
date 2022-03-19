import BaseTypeError from './base/TypeError';

declare class TypeError extends BaseTypeError {
    constructor(reason?: string, options?: { cause?: Error | undefined });

    cause: Error | undefined;
}

export default TypeError;
