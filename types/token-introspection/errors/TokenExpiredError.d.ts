import TokenNotActiveError = require('./TokenNotActiveError');

declare class TokenExpiredError extends TokenNotActiveError {
    constructor(message?: string);
}

export = TokenExpiredError;
