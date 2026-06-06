/// <reference types="node" />

import { EventEmitter } from "events";

declare namespace createClient {
    /**
     * Go to the `Rich Presence > Visualizer` settings of your [Discord application](https://discord.com/developers/applications) to find out how this would be rendered.
     */
    interface PresenceInfo {
        [key: string]: string | number | Date | boolean;

        /** The user's current party status */
        state: string;
        /** What the player is currently doing */
        details: string;
        /** Epoch seconds for game start - setting this will show the time as "elapsed" */
        startTimestamp: number | Date;
        /** Epoch seconds until game's end - setting this will show the time as "remaining" */
        endTimestamp: number | Date;
        /** Key of the uploaded image / asset for the large profile artwork */
        largeImageKey: string;
        /** Key of the uploaded image / asset for the small profile artwork */
        smallImageKey: string;

        instance: boolean;
    }

    interface RP {
        on(event: "error", listener: (err: string) => void): this;
        on(event: "connected", listener: () => void): this;
        on(event: "join" | "spectate", listener: (secret: string) => void): this;
        on(event: "joinRequest", listener: (user: string) => void): this;
    }

    class RP extends EventEmitter {
        /**
         * Updates the presence
         * @param presence Presence settings object. All properties are optional.
         */
        updatePresence(presence: Partial<PresenceInfo>): void;

        reply(user: string, response: "YES" | "NO" | "IGNORE"): void;
        disconnect(): void;
    }
}

/**
 * Connects to your application
 * @param clientID Get the client ID from the `General Information` page of your [Discord application](https://discord.com/developers/applications)
 */
declare function createClient(clientID: string): createClient.RP;

export = createClient;
