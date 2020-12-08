export interface AddressesOptions {
    /**
     * Provided to the libp2p underlying transports for listening on them.
     * @default []
     */
    listen: string[];
    /**
     * Used to compute the advertises that the node should advertise to the network.
     * @default []
     */
    announce: string[];
    /**
     * Used as a filter to compute the advertises that the node should advertise to the network.
     * @default []
     */
    noAnnounce: string[];
}

export interface HostOptions {
    agentVersion: string;
}

export interface ConnectionManagerOptions {
    /**
     * Minimum number of connections below which libp2p not activate preemptive disconnections. Defaults to 0
     * @default 0
     */
    minConnections: number;
    /**
     * Maximum number of connections libp2p is willing to have before it starts disconnecting.
     * @default Infinity
     */
    maxConnections: number;

    /**
     * Sets the maximum data — in bytes per second - (sent and received) this node is willing to endure before it starts disconnecting peers.
     * @default Infinity
     */
    maxData: number;

    /**
     *  Sets the maximum sent data — in bytes per second - this node is willing to endure before it starts disconnecting peers.
     * @default Infinity
     */
    maxSentData: number;
    /**
     *  Sets the maximum received data — in bytes per second - this node is willing to endure before it starts disconnecting peers.
     * @default Infinity
     */
    maxReceivedData: number;

    /**
     * Sets the maximum event loop delay (measured in milliseconds) this node is willing to endure before it starts disconnecting peers.
     * @default Infinity
     */
    maxEventLoopDelay: number;

    /**
     * Sets the poll interval (in milliseconds) for assessing the current state and determining if this peer needs to force a disconnect.
     * @default 2000(ms)
     */
    pollInterval: number;

    /**
     * The interval used to calculate moving averages (in milliseconds). This must be an available interval configured in Metrics
     * @default 60000(ms)
     */
    movingAverageInterval: number;

    /**
     * Number between 0 and 1.
     * @default 1
     */
    defaultPeerValue: number;
}

/**
 * Enum Transport Manager Fault Tolerance values.
 * FATAL_ALL should be used for failing in any listen circumstance.
 * NO_FATAL should be used for not failing when not listening.
 *
 * @readonly
 * @enum {number}
 */
export enum FaultTolerance {
    FATAL_ALL = 0,
    NO_FATAL = 1,
}

export interface TransportManagerOptions {
    faultTolerance: FaultTolerance;
}

export interface DialerOptions {
    /**
     * How many multiaddrs we can dial in parallel.
     */
    maxParallelDials: number;

    /**
     * How many multiaddrs we can dial per peer, in parallel.
     */
    maxDialsPerPeer: number;

    /**
     * Second dial timeout per peer in ms.
     */
    dialTimeout: number;

    resolvers: object; // FIXME
}

/**
 * @link https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md
 */
export interface Options {
    /**
     * Libp2p modules to use
     * @link https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md#modules
     */
    modules: object[];

    /**
     * Addresses for transport listening and to advertise to the network
     */
    addresses: AddressesOptions;
    config: any; // FIXME
    host: HostOptions;

    /**
     * @link https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md#configuring-connection-manager
     */
    connectionManager: ConnectionManagerOptions;

    /**
     * @link https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md#configuring-transport-manager
     */
    transportManager: TransportManagerOptions;

    /**
     * Must implement ipfs/interface-datastore (in memory datastore will be used if not provided)
     * @link https://github.com/ipfs/interface-datastore
     */
    datastore: object; // FIXME
    /**
     * Dialing in libp2p can be configured to limit the rate of dialing, and how long dials are allowed to take.
     * @link https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md#configuring-dialing
     */
    dialer: DialerOptions;
}
