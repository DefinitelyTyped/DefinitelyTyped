import BaseEvalError from './base/EvalError';

declare class EvalError extends BaseEvalError {
    constructor(reason?: string, options?: { cause?: unknown });

    cause: unknown;
}

export default EvalError;
