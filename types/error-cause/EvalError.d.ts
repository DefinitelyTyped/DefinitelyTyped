import BaseEvalError from './base/EvalError';

declare class EvalError extends BaseEvalError {
    constructor(reason?: string, options?: { cause?: Error | undefined });

    cause: Error | undefined;
}

export default EvalError;
