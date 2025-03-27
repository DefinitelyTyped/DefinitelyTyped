/// <reference types="node" />

import stream = require("stream");

declare function through(
    write?: (data: any) => void,
    end?: () => void,
    opts?: {
        autoDestroy: boolean;
    },
): through.ThroughStream;

declare namespace through {
    export interface ThroughStream extends stream.Transform {
        autoDestroy: boolean;
        queue: (chunk: any) => any;

        /** Unimplemented method for `ThroughStream` */
        isPaused: never;
        /** Unimplemented method for `ThroughStream` */
        read: never;
        /** Unimplemented method for `ThroughStream` */
        setEncoding: never;
        /** Unimplemented method for `ThroughStream` */
        unpipe: never;
        /** Unimplemented method for `ThroughStream` */
        unshift: never;
        /** Unimplemented method for `ThroughStream` */
        wrap: never;
        /** Unimplemented method for `ThroughStream` */
        compose: never;
        /** Unimplemented method for `ThroughStream` */
        iterator: never;
        /** Unimplemented method for `ThroughStream` */
        map: never;
        /** Unimplemented method for `ThroughStream` */
        filter: never;
        /** Unimplemented method for `ThroughStream` */
        forEach: never;
        /** Unimplemented method for `ThroughStream` */
        toArray: never;
        /** Unimplemented method for `ThroughStream` */
        some: never;
        /** Unimplemented method for `ThroughStream` */
        find: never;
        /** Unimplemented method for `ThroughStream` */
        every: never;
        /** Unimplemented method for `ThroughStream` */
        flatMap: never;
        /** Unimplemented method for `ThroughStream` */
        drop: never;
        /** Unimplemented method for `ThroughStream` */
        take: never;
        /** Unimplemented method for `ThroughStream` */
        asIndexedPairs: never;
        /** Unimplemented method for `ThroughStream` */
        reduce: never;
    }
}

export = through;
