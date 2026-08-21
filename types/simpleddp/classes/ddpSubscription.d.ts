import simpleDDP from "../index";
import { ddpEventListener } from "./ddpEventListener";

export class ddpSubscription {
    constructor(pubname: string, args: unknown[], ddplink: simpleDDP);
    /**
     * Returns true if subscription is active otherwise false.
     */
    isOn(): Promise<boolean>;
    /**
     * Returns true if subsciprtion is ready otherwise false.
     */
    isReady(): boolean;
    /**
     * Returns true if subscription is stopped otherwise false.
     */
    isStopped(): boolean;
    /**
     * Returns a promise which resolves when corresponding `nosub` message arrives. Rejects when `nosub` comes with error.
     */
    nosub(): Promise<void>;
    /**
     * Runs everytime when `nosub` message corresponding to the subscription comes from the server.
     */
    onNosub(f: () => void): ddpEventListener;
    /**
     * Runs everytime when `ready` message corresponding to the subscription comes from the server.
     */
    onReady(f: () => void): ddpEventListener;
    /**
     * Returns a promise which resolves when subscription is ready or rejects when `nosub` message arrives.
     */
    ready(): Promise<void>;
    /**
     * Completly removes subscription.
     */
    remove(): void;
    /**
     * Restart the subscription. You can also change subscription arguments. Returns a promise which resolves when subscription is ready.
     */
    restart(args: unknown[]): Promise<void>;
    /**
     * Start the subscription. Runs on class creation. Returns a promise which resolves when subscription is ready.
     */
    start(args: unknown[]): Promise<void>;
    /**
     * Stops subscription and return a promise which resolves when subscription is stopped.
     */
    stop(): Promise<void>;
}
