import { BaseEvalError, BaseEvalErrorConstructor } from './base/EvalError';

interface EvalError extends BaseEvalError {
    cause: unknown;
}

interface EvalErrorConstructor extends BaseEvalErrorConstructor {
    new (reason: string, options?: { cause?: unknown }): EvalError;
}

export default EvalErrorConstructor;
