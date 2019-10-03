import { Duplex } from 'stream';
import { JSONObject } from './sharedb';
import ShareDbBackend = require('..');

export = Agent;

/**
 * An `Agent` is the representation of a client's `Connection` state on the
 * server. If the `Connection` was created through `backend.connect` (i.e. the
 * client is running in the same Node process as the server), then the `Agent`
 * associated with a `Connection` can be accessed through `connection.agent`.
 *
 * The `Agent` will be made available in all middleware requests. The
 * `agent.custom` field is an object that can be used for storing arbitrary
 * information for use in middleware.
 *
 * @see https://github.com/share/sharedb#class-sharedbagent
 */
declare class Agent {
    backend: ShareDbBackend;
    stream: Duplex & {
        /**
         * `true` if this is agent is handling a ShareDB client in the same
         * Node process.
         */
        isServer?: boolean;
    };
    /**
     * Object for custom use in middleware to store app-specific state for a
     * given client session. It is in memory only as long as the session is
     * active, and it is passed to each middleware call.
     */
    custom: Agent.Custom;

    /**
     * Sends a JSON-compatible message to the client for this agent.
     *
     * @param message
     */
    send(message: JSONObject): void;
}

declare namespace Agent {
    interface Custom {
        [key: string]: unknown;
    }
}
