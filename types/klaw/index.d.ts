// Type definitions for klaw v3.0.0
// Project: https://github.com/jprichardson/node-klaw
// Definitions by: Matthew McEachen <https://github.com/mceachen>
//                 Pascal Sthamer <https://github.com/p4sca1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module "klaw" {

    import * as fs from "fs"
    import { Readable, ReadableOptions } from 'stream'

    function K(root: string, options?: K.Options): K.Walker

    namespace K {
        interface Item {
            path: string
            stats: fs.Stats
        }

        type QueueMethod = "shift" | "pop"

        interface Options extends ReadableOptions {
            queueMethod?: QueueMethod
            pathSorter?: (pathA: string, pathB: string) => number
            fs?: any // fs or mock-fs
            filter?: (path: string) => boolean
            depthLimit?: number
            preserveSymlinks?: boolean
        }

        type Event = "close" | "data" | "end" | "readable" | "error"

        interface Walker extends Readable {
            on(event: Event, listener: Function): this
            on(event: "close", listener: () => void): this
            on(event: "data", listener: (item: Item) => void): this
            on(event: "end", listener: () => void): this
            on(event: "readable", listener: () => void): this
            on(event: "error", listener: (err: Error) => void): this
            read(): Item
        }
    }

    export = K
}
