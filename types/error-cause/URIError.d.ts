import { BaseURIError, BaseURIErrorConstructor } from './base/URIError';

interface URIError extends BaseURIError {
    cause: unknown;
}

interface URIErrorConstructor extends BaseURIErrorConstructor {
    new (reason: string, options?: { cause?: unknown }): URIError;
}

export default URIErrorConstructor;
