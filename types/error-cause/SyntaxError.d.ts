import BaseSyntaxError from './base/SyntaxError';

declare class SyntaxError extends BaseSyntaxError {
    constructor(reason?: string, options?: { cause?: unknown });

    cause: unknown;
}

export default SyntaxError;
