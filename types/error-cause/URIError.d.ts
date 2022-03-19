import BaseURIError from './base/URIError';

declare class URIError extends BaseURIError {
    constructor(reason?: string, options?: { cause?: Error | undefined });

    cause: Error | undefined;
}

export default URIError;
