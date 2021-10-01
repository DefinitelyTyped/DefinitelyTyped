import { BaseError, BaseErrorConstructor } from './base/Error';

interface Error extends BaseError {
    cause: unknown;
}

interface ErrorConstructor extends BaseErrorConstructor {
    new (reason: string, options?: { cause?: unknown }): Error;
}

export default ErrorConstructor;
