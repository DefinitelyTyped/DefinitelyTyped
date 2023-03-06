import TokenNotActiveError = require('./TokenNotActiveError');

declare class NotBeforeError extends TokenNotActiveError {
}

export = NotBeforeError;
