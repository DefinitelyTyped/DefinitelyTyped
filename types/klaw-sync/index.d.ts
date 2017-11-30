// Type definitions for klaw-sync 1.1
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

  interface Options {
    /**
     *  any paths or `micromatch` patterns to ignore.
     *
     * For more information on micromatch patterns: https://github.com/jonschlinkert/micromatch#features
     */
    ignore?: string | string[]
    /**
     * True to only return files (ignore directories).
     *
     * Defaults to false if not specified.
     */
    nodir?: boolean
    /**
     * True to only return directories (ignore files).
     *
     * Defaults to false if not specified.
     */
    nofile?: boolean
  }
}

declare function klawSync(root: string, options?: klawSync.Options): ReadonlyArray<klawSync.Item>

export = klawSync
