import * as Podium from "podium";

/**
 * Access: read only and the public podium interface.
 * The response.events object supports the following events:
 * * 'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
 * * 'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
 * [See docs](https://hapijs.com/api/17.0.1#-responseevents)
 */
export interface ResponseEvents extends Podium {

    /**
     * 'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
     * 'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
     */
    on(criteria: 'peek' | 'finish', listener: Function): void;

    /**
     * 'peek' - emitted for each chunk of data written back to the client connection. The event method signature is function(chunk, encoding).
     * 'finish' - emitted when the response finished writing but before the client response connection is ended. The event method signature is function ().
     */
    once(criteria: 'peek' | 'finish', listener: Function): void;

}
