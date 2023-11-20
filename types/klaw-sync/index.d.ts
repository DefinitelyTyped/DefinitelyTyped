/// <reference types="node" />

import * as fs from "fs";
declare namespace klawSync {
    interface Item {
        path: string;
        stats: fs.Stats;
    }

    type Filter = (item: Item) => boolean;

    interface Options {
        /**
         * @description True to only return files (ignore directories).
         *              Defaults to false if not specified.
         * @default false
         */
        nodir?: boolean | undefined;

        /**
         * @description True to only return directories (ignore files).
         *              Defaults to false if not specified.
         * @default false
         */
        nofile?: boolean | undefined;

        /**
         * @description The number of times to recurse before stopping.
         *              -1 for unlimited.
         * @default -1
         * @since v5.0.0
         */
        depthLimit?: number | undefined;

        /**
         * @description Custom fs, useful when mocking fs object.
         * @default graceful-fs
         * @since v4.0.0
         */
        fs?: {
            readdirSync(path: string): string[];
            statSync(path: string): fs.Stats;
        } | undefined;

        /**
         * @description function that gets one argument fn({path: '', stats: {}}) and returns true to include
         *              or false to exclude the item
         * @since v2.0.0
         */
        filter?: Filter | undefined;

        /**
         * @description traverse all subdirectories, regardless of `filter` option.
         *
         * When set to true, traverseAll produces similar behavior to the default
         * behavior prior to `v4.0.0`. The current default of `traverseAll: false`
         * is equivalent to the old `noRecurseOnFailedFilter: true`).
         *
         * @since v6.0.0
         */
        traverseAll?: boolean | undefined;
    }
}

declare function klawSync(
    root: string,
    options?: klawSync.Options,
): ReadonlyArray<klawSync.Item>;

export = klawSync;
