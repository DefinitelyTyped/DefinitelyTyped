// Type definitions for express-brute-mongo
// Project: https://github.com/auth0/express-brute-mongo
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Collection } from "mongodb";

/**
 * @summary MongoDB store adapter.
 */
declare class MongoStore {
    constructor(getCollection: (collection: (c: Collection) => void) => void, options?: Object);
}
export = MongoStore;
