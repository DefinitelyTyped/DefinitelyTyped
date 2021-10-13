import { BaseSyntaxError, BaseSyntaxErrorConstructor } from './base/SyntaxError';

interface SyntaxError extends BaseSyntaxError {
    cause: unknown;
}

interface SyntaxErrorConstructor extends BaseSyntaxErrorConstructor {
    new (reason: string, options?: { cause?: unknown }): SyntaxError;
}

export default SyntaxErrorConstructor;
