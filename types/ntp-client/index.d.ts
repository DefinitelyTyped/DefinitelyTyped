/** Default NTP port. Defaults to `123` */
export let defaultNtpPort: number;
/** Default NTP server. Defaults to `pool.ntp.org` */
export let defaultNtpServer: string;

/** The default timeout for NTP replies in milliseconds. Defaults to 10000 */
export let ntpReplyTimeout: number;

/**
 * Tries to retrieve the current time and date from an NTP server.
 * This function contacts the given NTP server on the given port and tries to
 * retrieve the current time and date. Upon success, the given callback
 * function is invoked and a date object is passed as second argument. If an
 * error occurs, the error is passed as first argument to the callback
 * function.
 * If either the param `server` or `port` are null or undefined, the default
 * NTP server or port, given by `defaultNtpServer` or `defaultNtpPort`
 * respectively, are used.
 *
 * @param server NTP to contact. If this value is null, the default NTP server is used
 * @param port Port to contact on NTP server. If this value is null, the default NTP port is used
 * @param callback Callback which is invoked on success or error. If the first param is not null, an
 * an error has occurred and the param contains the error. If it is null, the second param contains
 * the current time that was retrieved from the NTP server
 */
export function getNetworkTime(
    server: string | null | undefined,
    port: number | null | undefined,
    callback: (err: Error | string | null, date: Date | null) => void,
): void;

/**
 * Requests the current time from the default NTP server on the default port.
 *
 * This function is intended for demonstration purposes. It requests the
 * current time from the default NTP server using the default port and prints
 * it to the console. In case of an error, the error is also printed to the
 * console.
 *
 * @param argv Parameter vector. This value is ignored
 */
export function demo(...argv: any[]): void;
