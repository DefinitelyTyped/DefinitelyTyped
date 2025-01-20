//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

import { Events } from "./events";

/**
 * Namespace: browser.networkStatus
 */
export namespace NetworkStatus {
    interface NetworkLinkInfo {
        /**
         * Status of the network link, if "unknown" then link is usually assumed to be "up"
         */
        status: NetworkLinkInfoStatusEnum;

        /**
         * If known, the type of network connection that is avialable.
         */
        type: NetworkLinkInfoTypeEnum;

        /**
         * If known, the network id or name.
         * Optional.
         */
        id?: string;
    }

    /**
     * Status of the network link, if "unknown" then link is usually assumed to be "up"
     */
    type NetworkLinkInfoStatusEnum = "unknown" | "up" | "down";

    /**
     * If known, the type of network connection that is avialable.
     */
    type NetworkLinkInfoTypeEnum = "unknown" | "ethernet" | "usb" | "wifi" | "wimax" | "mobile";

    interface Static {
        /**
         * Returns the $(ref:NetworkLinkInfo} of the current network connection.
         */
        getLinkInfo(): void;

        /**
         * Fired when the network connection state changes.
         */
        onConnectionChanged: Events.Event<(details: NetworkLinkInfo) => void>;
    }
}
