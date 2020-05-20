// Type definitions for level-ttl 3.1
// Project: https://github.com/level/level-ttl
// Definitions by: Carson Farmer <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { LevelUp } from 'levelup';
import { AbstractLevelDOWN, AbstractIterator, ErrorCallback } from 'abstract-leveldown';

declare namespace ttl {
    interface LevelTTLOptions {
        /**
         * A string for prefixing the modified database methods (i.e., put, del, batch, ttl, stop).
         */
        methodPrefix?: string;
        /**
         * Character for separating sublevel prefixes from user keys and each other. Should be outside the character (or byte) range of user keys.
         * @default ''
         */
        separator?: string;
        /**
         * Character specifying the key namespace for ttl values.
         * @default 'ttl'
         */
        namespace?: string;
        /**
         * Character specifying the key namespace for expiration values.
         * @default 'x'
         */
        expiryNamespace?: string;
        /**
         * A number specifying the frequency of internal scans for checking for expired keys.
         * @default 10000
         */
        checkFrequency?: number;
        /**
         * A number specifying the default time-to-live for new or updated values.
         * This can be overridden by explicitly setting the ttl value.
         * @default 0
         */
        defaultTTL?: number;
        /**
         * A custom storage database for the meta data.
         * If it's set, that storage will contain all the ttl meta data.
         * A use case for this would be to avoid mixing data and meta data in the same keyspace, since if it's not set, all data will be sharing the same keyspace.
         */
        sub?: LevelUp;
    }

    interface LevelTTL<K = any, V = any> extends LevelUp<AbstractLevelDOWN<K, V>, AbstractIterator<K, V>> {
        ttl(key: K, ttl: number, callback?: ErrorCallback): void;
        stop(callback?: ErrorCallback): void;
    }
}

/**
 * Augment levelup to handle a new 'ttl' option on put() and batch() that specifies
 * the number of milliseconds an entry should remain in the data store.
 * After the TTL, the entry will be automatically cleared for you.
 * @param db
 * @param opts
 * @see {@link https://github.com/level/level-ttl#usage level-ttl Usage}
 */
declare function ttl<K = any, V = any>(db: LevelUp<AbstractLevelDOWN<K, V>, AbstractIterator<K, V>>, opts?: ttl.LevelTTLOptions): ttl.LevelTTL<K, V>;
export = ttl;
