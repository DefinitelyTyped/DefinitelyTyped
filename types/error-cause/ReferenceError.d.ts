import { BaseReferenceError, BaseReferenceErrorConstructor } from './base/ReferenceError';

interface ReferenceError extends BaseReferenceError {
    cause: unknown;
}

interface ReferenceErrorConstructor extends BaseReferenceErrorConstructor {
    new (reason: string, options?: { cause?: unknown }): ReferenceError;
}

export default ReferenceErrorConstructor;
