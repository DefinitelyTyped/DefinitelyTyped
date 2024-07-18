import { ddpEvent } from "../ddpEvent";
import simpleDDP from "../index";

export class ddpEventListener {
    eventname: ddpEvent;
    f: () => void;
    ddplink: simpleDDP;
    /**
     * Usually you won't need this unless you stopped it with `stop()`
     */
    start(): void;
    /**
     * Stops listening for server event messages.
     * You can start any stopped event listener at any time using `start()`.
     */
    stop(): void;
}
