import * as m from '..';

declare class TimeSyncExtension implements m.Extension {
    constructor();

    incoming: m.Listener;
    outgoing: m.Listener;
    registered: (name: string, cometd: m.CometD) => void;
    unregistered: () => void;

    /**
     * Get the estimated offset in ms from the clients clock to the
     * servers clock.  The server time is the client time plus the offset.
     */
    getTimeOffset: () => number;

    /**
     * Get an array of multiple offset samples used to calculate
     * the offset.
     */
    getTimeOffsetSamples: () => [number];

    /**
     * Get the estimated network lag in ms from the client to the server.
     */
    getNetworkLag: () => number;

    /**
     * Get the estimated server time in ms since the epoch.
     */
    getServerTime: () => number;

    /**
     *
     * Get the estimated server time as a Date object
     */
    getServerDate: () => Date;
}

export default TimeSyncExtension;
