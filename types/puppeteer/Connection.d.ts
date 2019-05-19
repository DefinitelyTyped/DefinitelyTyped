/**
 * Definition from Connection.js
 * https://github.com/GoogleChrome/puppeteer/blob/master/lib/Connection.js
 */
import { EventEmitter } from "events";

/**
 * implemented in Connection.js
 */
export interface CDPSession extends EventEmitter {
    /**
     * Detaches session from target. Once detached, session won't emit any events and can't be used
     * to send messages.
     */
    detach(): Promise<void>;

    /**
     * @param method Protocol method name
     */
    send(method: string, params?: object): Promise<object>;
}
