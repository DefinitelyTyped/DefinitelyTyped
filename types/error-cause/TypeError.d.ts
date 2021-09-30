import { BaseTypeError, BaseTypeErrorConstructor } from './base/TypeError';

interface TypeError extends BaseTypeError {
    cause: unknown;
}

interface TypeErrorConstructor extends BaseTypeErrorConstructor {
    new (reason: string, options?: { cause?: unknown }): TypeError;
}

export default TypeErrorConstructor;
