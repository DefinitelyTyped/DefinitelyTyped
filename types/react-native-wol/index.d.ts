// Type definitions for react-native-wol 1.0
// Project: https://github.com/zombie6888/react-native-wol#readme
// Definitions by: Keana Delmotte <https://github.com/KeanaDelmotte>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Send a Wake on LAN packet for the provided MAC address.
 */
declare function send(
    ipAddress: string,
    macAddress: string,
    /** The callback will be passed true if the packet was sent without error. */
    callback?: (result: boolean, message: string) => void,
): void;

declare const wol: { send: typeof send };

export default wol;
