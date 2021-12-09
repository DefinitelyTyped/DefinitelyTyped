import IntrospectionError = require('./IntrospectionError');

declare class TokenNotActiveError extends IntrospectionError {
    constructor(message?: string);
}

export = TokenNotActiveError;
