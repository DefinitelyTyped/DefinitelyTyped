import TokenNotActiveError = require('./TokenNotActiveError');

declare class TokenExpiredError extends TokenNotActiveError {
}

export = TokenExpiredError;
