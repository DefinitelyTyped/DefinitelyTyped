// Type definitions for klaw-sync ^3.0.2
// Project: https://github.com/manidlou/node-klaw-sync
// Definitions by: Colin Luo <https://github.com/luozhihua>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from 'fs';
declare namespace klawSync {
    interface Item {
        path: string;
        stats: fs.Stats;
    }

    interface Filter {
        (item: Item): boolean;
    }

    interface Options {
        /**
         * @description any paths or `micromatch` patterns to ignore.
         *              For more information on micromatch patterns: https://github.com/jonschlinkert/micromatch#features
         * @type {(string | string[])}
         * @memberof Options
         * @deprecated v2.0.0
         */
        ignore?: string | string[];

        /**
         * @description True to only return files (ignore directories).
         *              Defaults to false if not specified.
         * @type {boolean}
         * @default false
         * @memberof Options
         */
        nodir?: boolean;

        /**
         * @description True to only return directories (ignore files).
         *              Defaults to false if not specified.
         * @type {boolean}
         * @default false
         * @memberof Options
         */
        nofile?: boolean;

        /**
         * @description when filter function is used, the default behavior is to read all directories even
         *              if they don't pass the filter function (won't be included but still will be traversed).
         *              If you set true, there will be neither inclusion nor traversal for directories that
         *              don't pass the filter function
         * @type {boolean}
         * @since v2.0.0
         * @memberof Options
         */
        noRecurseOnFailedFilter?: boolean;

        /**
         * @description function that gets one argument fn({path: '', stats: {}}) and returns true to include
         *              or false to exclude the item
         * @type {klawSync.Filter}
         * @since v2.0.0
         * @memberof Options
         */
        filter?: klawSync.Filter;
    }
}

declare function klawSync(
    root: string,
    options?: klawSync.Options,
): ReadonlyArray<klawSync.Item>;

export = klawSync;
