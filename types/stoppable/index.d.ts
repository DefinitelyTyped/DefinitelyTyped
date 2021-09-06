// Type definitions for stoppable 1.1
// Project: https://github.com/hunterloftis/stoppable
// Definitions by: Eric Byers <https://github.com/EricByers>
//                 John Plusjé <https://github.com/jplusje>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as http from "http";
import * as https from "https";

declare namespace stoppable {
    // Left for backwards compatibility
    type StoppableServer = http.Server & WithStop;

    interface WithStop {
        /**
         * Closes the server.
         *
         * @param callback Passed along to the existing `server.close` function to
         * auto-register a `'close'` event. The first agrument is an error, and
         * the second argument indicates whether it stopped gracefully.
         */
        stop(callback?: (e: Error | undefined, gracefully: boolean) => any): void;
    }
}

/**
 * Decorates a server instance with a `stop` method.
 *
 * @param server Any HTTP or HTTPS Server instance.
 * @param grace Milliseconds to wait before force-closing connections. Defaults to
 *              `Infinity` (don't force-close). If you want to immediately kill all sockets
 *              you can use a grace of `0`.
 * @returns The server instance, so can be chained, or can be run as a standalone statement.
 *
 * @example
 * import * as http from 'http';
 * import stoppable = require('stoppable');
 *
 * const server = stoppable(http.createServer((req, res) => {}));
 * server.stop();
 */
declare function stoppable<T extends http.Server | https.Server>(server: T, grace?: number): T & stoppable.WithStop;

export = stoppable;
