export = listify;

/**
 * Turn an array into a list of comma-separated values, appropriate for use in an English sentence.
 *
 * @example
 * import listify = require('listify');
 * import * as assert from 'node:assert';
 *
 * assert(listify([1, 2]) === '1 and 2');
 * assert(listify([1, 2, 3]) === '1, 2, and 3');
 * assert(listify([1, 2, 3, 4]) === '1, 2, 3, and 4');
 * assert(listify([1, 2, 3], { separator: '… ' }) === '1… 2… and 3');
 * assert(listify([1, 2, 3], { finalWord: false }) === '1, 2, 3');
 * assert(listify([1, 2, 3], { separator: '… ', finalWord: 'or' }) === '1… 2… or 3');
 */
declare function listify(list: ReadonlyArray<string | number>, options?: listify.Options): string;

declare namespace listify {
    interface Options {
        /**
         * @default ', '
         */
        separator?: string;
        /**
         * @default 'and'
         */
        finalWord?: string | false;
    }
}
