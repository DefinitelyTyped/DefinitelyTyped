import TokenNotActiveError = require('./TokenNotActiveError');

declare class NotBeforeError extends TokenNotActiveError {
    constructor(message?: string);
}

export = NotBeforeError;
