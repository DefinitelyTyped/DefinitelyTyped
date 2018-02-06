// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface EntriesIn {
        /**
         * @see _.entriesIn
         */
        (): EntriesIn;
        /**
         * @see _.entriesIn
         */
        <T>(object: _.Dictionary<T>): Array<[string, T]>;
        /**
         * @see _.entriesIn
         */
        (object: object): Array<[string, any]>;
    }
}

declare const entriesIn: Lodash.EntriesIn;
export = entriesIn;
