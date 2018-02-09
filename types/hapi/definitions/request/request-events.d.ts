import * as Podium from "podium";
import {PeekListener} from "hapi";

/**
 * 'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
 * 'finish' - emitted when the request payload finished reading. The event method signature is function ().
 * 'disconnect' - emitted when a request errors or aborts unexpectedly.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestevents)
 */
export type RequestEventType = "peek" | "finish" | "disconnect";

/**
 * Access: read only and the public podium interface.
 * The request.events supports the following events:
 * * 'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
 * * 'finish' - emitted when the request payload finished reading. The event method signature is function ().
 * * 'disconnect' - emitted when a request errors or aborts unexpectedly.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestevents)
 */
export interface RequestEvents extends Podium {

    /**
     * Access: read only and the public podium interface.
     * The request.events supports the following events:
     * * 'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
     * * 'finish' - emitted when the request payload finished reading. The event method signature is function ().
     * * 'disconnect' - emitted when a request errors or aborts unexpectedly.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestevents)
     */
    on(criteria: "peek", listener: PeekListener): void;
    on(criteria: "finish" | "disconnect", listener: () => void): void;
    on(criteria: RequestEventType, listener: Function): void;

    /**
     * Access: read only and the public podium interface.
     * The request.events supports the following events:
     * * 'peek' - emitted for each chunk of payload data read from the client connection. The event method signature is function(chunk, encoding).
     * * 'finish' - emitted when the request payload finished reading. The event method signature is function ().
     * * 'disconnect' - emitted when a request errors or aborts unexpectedly.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-requestevents)
     */
    once(criteria: "peek", listener: PeekListener): void;
    once(criteria: "finish" | "disconnect", listener: () => void): void;
    once(criteria: RequestEventType, listener: Function): void;



    // TODO is it necessary to implement "emmit" event here?

}
