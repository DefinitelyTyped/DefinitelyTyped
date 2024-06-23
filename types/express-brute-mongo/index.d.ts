import { Collection } from "mongodb";

/**
 * @summary MongoDB store adapter.
 */
declare class MongoStore {
    constructor(getCollection: (collection: (c: Collection) => void) => void, options?: Object);
}
export = MongoStore;
