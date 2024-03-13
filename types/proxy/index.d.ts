/// <reference types="node" />

import { IncomingMessage, Server } from "http";

type InferRequest<S extends Server> = S extends Server<infer R> ? R : never;

interface ProxyServer<S extends Server = Server, Request extends typeof IncomingMessage = InferRequest<S>>
    extends Server
{
    authenticate: (req: InstanceType<Request>, callback: (err: unknown, auth: boolean) => void) => void;
}

declare function setup<S extends Server = Server>(server?: S): ProxyServer<S>;

export = setup;
