import BaseSyntaxError from './base/SyntaxError';

declare class SyntaxError extends BaseSyntaxError {
    constructor(reason?: string, options?: { cause?: Error | undefined });

    cause: Error | undefined;
}

export default SyntaxError;
