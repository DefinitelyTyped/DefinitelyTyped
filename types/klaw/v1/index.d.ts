/// <reference types="node" />

import { Stats } from "fs";
import { Readable, ReadableOptions } from "stream";

declare function K(root: string, options?: K.Options): K.Walker;

declare namespace K {
    interface Item {
        path: string;
        stats: Stats;
    }

    type QueueMethod = "shift" | "pop";

    interface Options extends ReadableOptions {
        queueMethod?: QueueMethod | undefined;
        pathSorter?(pathA: string, pathB: string): number;
        fs?: any; // fs or mock-fs
        filter?(path: string): boolean;
    }

    type Event = "close" | "data" | "end" | "readable" | "error";

    interface Walker {
        on(event: Event, listener: Function): this;
        on(event: "close" | "end" | "readable", listener: () => void): this;
        on(event: "data", listener: (item: Item) => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        read(): Item;
    }
}

export = K;
