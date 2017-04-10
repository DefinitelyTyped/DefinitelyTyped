// Type definitions for express-brute-mongo
// Project: https://github.com/auth0/express-brute-mongo
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped




/**
 * @summary MongoDB store adapter.
 * @class
 */
export = class MongoStore {
    /**
     * @summary Constructor.
     * @constructor
     * @param {Function} getCollection The collection.
     * @param {Object}   options       The otpions.
     */
    constructor(getCollection: (collection: any) => void, options?: Object);
}
