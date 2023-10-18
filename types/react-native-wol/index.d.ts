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
