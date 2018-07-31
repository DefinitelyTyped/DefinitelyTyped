// Type definitions for klaw-sync 2.0
// Project: https://github.com/manidlou/node-klaw-sync
// Definitions by: Brendan Forster <https://github.com/shiftkey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from 'fs'
declare namespace klawSync {
    interface Item {
        path: string
        stats: fs.Stats
    }

    type Filter = (item: Item) => boolean

    interface Options {
        /**
         * @description True to only return files (ignore directories).
         *              Defaults to false if not specified.
         * @default false
         */
        nodir?: boolean

        /**
         * @description True to only return directories (ignore files).
         *              Defaults to false if not specified.
         * @default false
         */
        nofile?: boolean

        /**
         * @description when filter function is used, the default behavior is to read all directories even
         *              if they don't pass the filter function (won't be included but still will be traversed).
         *              If you set true, there will be neither inclusion nor traversal for directories that
         *              don't pass the filter function
         * @since v2.0.0
         */
        noRecurseOnFailedFilter?: boolean

        /**
         * @description function that gets one argument fn({path: '', stats: {}}) and returns true to include
         *              or false to exclude the item
         * @since v2.0.0
         */
        filter?: Filter
    }
}

declare function klawSync(
    root: string,
    options?: klawSync.Options,
): ReadonlyArray<klawSync.Item>

export = klawSync
