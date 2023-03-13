// Type definitions for proxy 1.0
// Project: https://github.com/TooTallNate/proxy#readme
// Definitions by: Nicolas Le Cam <https://github.com/KuSh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Server } from 'http';

type InferRequest<S extends Server> = S extends Server<infer R> ? R : never;

interface ProxyServer<S extends Server = Server, IncomingMessage = InferRequest<S>> extends Server {
    authenticate: (req: IncomingMessage, callback: (err: unknown, auth: boolean) => void) => void;
}

declare function setup<S extends Server = Server>(server?: S): ProxyServer<S>;

export = setup;
