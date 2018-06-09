// Type definitions for stoppable 1.0
// Project: https://github.com/hunterloftis/stoppable
// Definitions by: Eric Byers <https://github.com/EricByers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />
import { Server } from 'http';

declare function stoppable(server: Server, grace?: number): Server;

export = stoppable;
