// Type definitions for stoppable 1.1
// Project: https://github.com/hunterloftis/stoppable
// Definitions by: Eric Byers <https://github.com/EricByers>
//                 John Plusjé <https://github.com/jplusje>
//                 Ilia Baryshnikov <https://github.com/qwelias>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Server as NetServer } from 'net';
import { Server as HttpServer } from 'http';

declare function stoppable <S extends NetServer>(server: S, grace?: number): stoppable.StoppableServer<S>;

declare namespace stoppable {
  type StoppableServer<S = HttpServer> = S & {
    stop(callback?: (e: Error, gracefully: boolean) => void): void;
  }
}

export = stoppable;
