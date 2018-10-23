// Type definitions for reconnect-core 1.3
// Project: https://www.npmjs.com/package/reconnect-core
// Definitions by: James Bromwell <https://github.com/thw0rted>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Backoff, ExponentialOptions  } from "backoff";
import { EventEmitter } from "events";
import { Stream } from "stream";

declare namespace reconnect {
    // TODO: Once DT supports TS 3.0, use new Generic Rest Parameter feature for
    // ArgType.  Current definitions only support one parameter passed to
    // connect() but the library actually allows any number of args.
    type CustomModule<ArgType, ConnectionType> =
        (opts?: ModuleOptions<ConnectionType>, cb?: (con: ConnectionType) => void) => Instance<ArgType, ConnectionType>;

    interface ModuleOptions<ConnectionType> extends ExponentialOptions {
        immediate?: boolean;
        failAfter?: number;
        onConnect?: (con: ConnectionType) => void;
        strategy?: "fibonacci" | "exponential" | Backoff;
    }

    interface Instance<ArgType, ConnectionType> extends EventEmitter {
        connect(opts: ArgType): this;
        listen(opts: ArgType): this;
        disconnect(): this;
        reset(): void;

        readonly connected: boolean;
        reconnect: boolean;

        on(event: "backoff", cb: (n: number, delay: number, err?: any) => void): this;
        on(event: "connect" | "connection", cb: (con: ConnectionType) => void): this;
        on(event: "disconnect", cb: (err?: any) => void): this;
        on(event: "error" | "fail", cb: (err: any) => void): this;
        on(event: "reconnect", cb: (n: number, delay: number) => void): this;
    }
}

type ConnectFunction<ArgType, ConnectionType> =
    (this: reconnect.Instance<ArgType, ConnectionType>, opts: ArgType) => ConnectionType;
declare function reconnect<ArgType, ConnectionType>(
    cf: ConnectFunction<ArgType, ConnectionType>): reconnect.CustomModule<ArgType, ConnectionType>;

export = reconnect;
