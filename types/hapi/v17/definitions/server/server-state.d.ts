import {ServerStateCookieOptions} from "hapi";
import {Dictionary} from "../util/util";

export interface ServerState {

    /**
     * The server cookies manager.
     * Access: read only and statehood public interface.
     */
    readonly states: any;

    /**
     * The server cookies manager settings. The settings are based on the values configured in [server.options.state](https://github.com/hapijs/hapi/blob/master/API.md#server.options.state).
     */
    readonly settings: ServerStateCookieOptions;

    /**
     * An object containing the configuration of each cookie added via [server.state()](https://github.com/hapijs/hapi/blob/master/API.md#server.state()) where each key is the
     * cookie name and value is the configuration object.
     */
    readonly cookies: any; // TODO what the difference between this one and the settings above? This one should be an array?

    /**
     * An array containing the names of all configued cookies.
     */
    readonly names: Dictionary<string>;


}
