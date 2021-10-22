import BaseURIError from './base/URIError';

declare class URIError extends BaseURIError {
    constructor(reason?: string, options?: { cause?: unknown });

    cause: unknown;
}

export default URIError;
