// Type definitions for crypto-pouch 4.0
// Project: https://github.com/calvinmetcalf/crypto-pouch
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import PouchDB = require('pouchdb');

declare global {
    namespace PouchDB {
        namespace CryptoPouch {
            interface Options {
                /* A string password, used to encrypt documents. */
                password: string;
                /* Array of strings of properties that will not be encrypted. */
                ignore?: string[];
            }
        }

        interface Database {
            /**
             *
             * @param options see CryptoPouch.Options
             */
            crypto(options: CryptoPouch.Options): Promise<void>;
            /**
             *
             * @param password A string password, used to encrypt documents.
             * @param ignore Array of strings of properties that will not be encrypted.
             */
            crypto(password: string, ignore?: string[]): Promise<void>;
            /**
             *
             * Disables encryption on the database and forgets your password.
             */
            removeCrypto(): void;
        }
    }
}
declare const Plugin: PouchDB.Plugin;
export = Plugin;
