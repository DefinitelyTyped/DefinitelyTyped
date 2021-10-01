import { BaseRangeError, BaseRangeErrorConstructor } from './base/RangeError';

interface RangeError extends BaseRangeError {
    cause: unknown;
}

interface RangeErrorConstructor extends BaseRangeErrorConstructor {
    new (reason: string, options?: { cause?: unknown }): RangeError;
}

export default RangeErrorConstructor;
