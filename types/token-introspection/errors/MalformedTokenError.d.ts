import IntrospectionError = require('./IntrospectionError');

declare class MalformedTokenError extends IntrospectionError {
    constructor(message?: string);
}

export = MalformedTokenError;
