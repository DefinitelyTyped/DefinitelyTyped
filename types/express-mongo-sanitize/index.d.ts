// Type definitions for express-mongo-sanitize 1.3
// Project: https://github.com/fiznool/express-mongo-sanitize#readme
// Definitions by: Eric Byers <https://github.com/ericbyers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');

interface MongoSanitizeOptions {
    replaceWith: any;
}

declare namespace expressMongoSanitize {
    function sanitize<T>(payload: T, options?: MongoSanitizeOptions): T;
    function has(payload: any): boolean;
}

declare function expressMongoSanitize(options?: MongoSanitizeOptions): (req: express.Request, res: express.Response, next: express.NextFunction) => void;

export = expressMongoSanitize;
