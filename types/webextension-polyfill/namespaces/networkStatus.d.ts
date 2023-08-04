//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.networkStatus
 *
 * This API provides the ability to determine the status of and detect changes in the network connection.
 * This API can only be used in privileged extensions.
 * Permissions: "networkStatus"
 */
import { Events } from "./events";

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
         *
         * @param details
         */
        onConnectionChanged: Events.Event<(details: NetworkLinkInfo) => void>;
    }
}
