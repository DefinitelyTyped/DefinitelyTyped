/**
 * @see https://github.com/WICG/direct-sockets/blob/main/docs/explainer.md
 */

declare class UDPSocket {
    /**
     * Creates a new UDPSocket instance configured with the specified options.
     * @param options Configuration options for binding or connecting the UDP
     *   socket.
     * @throws {NotAllowedError} If blocked by the direct-sockets permissions
     *   policy.
     */
    constructor(options: UDPSocketOptions);
    /**
     * A Promise that resolves with a UDPSocketOpenInfo object once the socket is
     * successfully opened and ready for I/O operations.
     */
    readonly opened: Promise<UDPSocketOpenInfo>;
    /** A Promise that resolves when the socket is fully closed. */
    readonly closed: Promise<void>;
    /**
     * Closes the UDP socket. This operation succeeds if and only if neither the
     * readable nor the writable stream is locked.
     * @return A Promise that resolves with no value when the socket has
     *   successfully closed.
     */
    close(): Promise<void>;
}

interface UDPMessage {
    /** The payload data of the UDP message. */
    data?: BufferSource;
    /**
     * A string representing the remote IP address (IPv4 or IPv6) associated with
     * the UDP message.
     */
    remoteAddress?: string;
    /** The remote port number associated with the UDP message. */
    remotePort?: number;
    /** Specifies the DNS query type used for resolving the remote address. */
    dnsQueryType?: SocketDnsQueryType;
}

declare class TCPSocket {
    /**
     * Creates a new TCPSocket instance and initiates a TCP connection to the
     * specified remote host.
     * @param remoteAddress A string representing the remote host address, either
     *   an IP address or a domain name.
     * @param remotePort The remote port number to connect to.
     * @param options Optional configuration settings for the TCP socket.
     * @throws {NotAllowedError} If blocked by the 'direct-sockets' permissions
     *   policy.
     */
    constructor(remoteAddress: string, remotePort: number, options?: TCPSocketOptions);
    /**
     * A promise that resolves with a TCPSocketOpenInfo object once the TCP
     * connection has been successfully established.
     * @return A Promise that resolves to a TCPSocketOpenInfo containing the
     *   readable and writable streams and connection metadata.
     */
    readonly opened: Promise<TCPSocketOpenInfo>;
    /**
     * A promise that resolves when the socket is closed, or rejects if an error
     * occurs.
     * @return A Promise that resolves when the socket closes.
     */
    readonly closed: Promise<void>;
    /**
     * Closes the TCP socket. This operation succeeds if and only if neither the
     * readable nor the writable stream is locked.
     * @return A Promise that resolves when the socket has successfully closed.
     */
    close(): Promise<void>;
}

declare class TCPServerSocket {
    /**
     * Creates a new TCPServerSocket instance bound to the specified local address.
     * @param localAddress A string representing the local IP address to bind the
     *   server socket to.
     * @param options Optional configuration parameters including localPort and
     *   backlog.
     * @throws {NotAllowedError} If blocked by the 'direct-sockets' permissions
     *   policy.
     */
    constructor(localAddress: string, options?: TCPServerSocketOptions);
    /**
     * A read-only property returning a Promise that resolves with a
     * TCPServerSocketOpenInfo object once the server socket has successfully
     * opened and is ready to accept connections.
     * @return A Promise that resolves to a TCPServerSocketOpenInfo instance
     *   containing the readable stream and network binding details.
     */
    readonly opened: Promise<TCPServerSocketOpenInfo>;
    /**
     * A read-only property returning a Promise that resolves when the server
     * socket is closed.
     * @return A Promise that resolves when the socket closes.
     */
    readonly closed: Promise<void>;
    /**
     * Closes the TCP server socket. This operation succeeds if and only if the
     * underlying readable stream is not locked.
     * @return A Promise that resolves when the socket has successfully closed.
     */
    close(): Promise<void>;
}

type SocketDnsQueryType =
    | "ipv4"
    | "ipv6";

interface SocketOptions {
    sendBufferSize?: number;
    receiveBufferSize?: number;
}

interface TCPSocketOptions extends SocketOptions {
    /** @default false */
    noDelay?: boolean;
    keepAliveDelay?: number;
    dnsQueryType?: SocketDnsQueryType;
}

interface UDPSocketOptions extends SocketOptions {
    remoteAddress?: string;
    remotePort?: number;
    localAddress?: string;
    localPort?: number;
    dnsQueryType?: SocketDnsQueryType;
    ipv6Only?: boolean;
    multicastAllowAddressSharing?: boolean;
    multicastTimeToLive?: number;
    multicastLoopback?: boolean;
}

interface TCPServerSocketOptions {
    localPort?: number;
    backlog?: number;
    ipv6Only?: boolean;
}

interface SocketOpenInfo {
    readable: ReadableStream;
    writable: WritableStream;
    remoteAddress?: string;
    remotePort?: number;
    localAddress?: string;
    localPort?: number;
}

type TCPSocketOpenInfo = SocketOpenInfo;

interface UDPSocketOpenInfo extends SocketOpenInfo {
    multicastController?: MulticastController;
}

interface TCPServerSocketOpenInfo {
    readable: ReadableStream;
    localAddress: string;
    localPort: number;
}

interface MulticastMembership {
    /** A string representing the IP address of the multicast group. */
    groupAddress: string;
    /** A string representing the source IP address for source-specific multicast. */
    sourceAddress?: string;
}

interface MulticastGroupOptions {
    /** A string representing the source IP address for source-specific multicast. */
    sourceAddress?: string;
}

interface MulticastController {
    /**
     * Joins a multicast group.
     * @param ipAddress A string representing the multicast group IP address.
     * @param options Optional configuration specifying the source address.
     * @return A Promise that resolves when the socket has successfully joined the
     *   multicast group.
     */
    joinGroup(ipAddress: string, options?: MulticastGroupOptions): Promise<void>;
    /**
     * Leaves a multicast group.
     * @param ipAddress A string representing the multicast group IP address.
     * @param options Optional configuration specifying the source address.
     * @return A Promise that resolves when the socket has successfully left the
     *   multicast group.
     */
    leaveGroup(ipAddress: string, options?: MulticastGroupOptions): Promise<void>;
    /**
     * A frozen array of strings and MulticastMembership objects representing
     * currently joined multicast groups.
     */
    readonly joinedGroups: readonly (string | MulticastMembership)[];
}
