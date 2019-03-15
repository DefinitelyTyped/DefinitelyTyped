// Type definitions for stoppable 1.1
// Project: https://github.com/hunterloftis/stoppable
// Definitions by: Eric Byers <https://github.com/EricByers>
//                 John Plusjé <https://github.com/jplusje>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Server } from 'http';

declare namespace stoppable {
  interface StoppableServer extends Server {
    stop(callback?: (e: Error, gracefully: boolean) => void): void;
  }
}

declare function stoppable(server: Server, grace?: number): stoppable.StoppableServer;

export = stoppable;
