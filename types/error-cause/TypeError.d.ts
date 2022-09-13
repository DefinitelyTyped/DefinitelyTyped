import BaseTypeError from './base/TypeError';

declare class TypeError extends BaseTypeError {
    constructor(reason?: string, options?: { cause?: unknown });

    cause: unknown;
}

export default TypeError;
