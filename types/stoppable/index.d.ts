// Type definitions for stoppable 1.1
// Project: https://github.com/hunterloftis/stoppable
// Definitions by: Eric Byers <https://github.com/EricByers>
//                 John Plusjé <https://github.com/jplusje>
//                 Tobias Andersen <https://github.com/ZaradarDFDS>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import * as https from 'https';
import * as http from 'http';

declare namespace stoppable {
  interface StoppableServer extends https.Server, http.Server {
    stop(callback?: (e: Error, gracefully: boolean) => void): void;
  }
}

declare function stoppable(server: any, grace?: number): stoppable.StoppableServer;

export = stoppable;
