import {
    SocketDnsQueryType,
    TCPServerSocketOpenInfo,
    TCPServerSocketOptions,
    TCPSocketOpenInfo,
    TCPSocketOptions,
    UDPMessage,
    UDPSocketOpenInfo,
    UDPSocketOptions,
} from "w3c-direct-sockets";

async function testDirectSockets() {
    const remoteAddress = "192.168.1.1";
    const localAddress = "0.0.0.0";
    const remotePort = 8080;
    const localPort = 3000;

    // --------------------------------------------------------------------------------
    // SocketDnsQueryType (Enum Test)
    // --------------------------------------------------------------------------------
    const dnsTypeIpv4: SocketDnsQueryType = "ipv4";
    // $ExpectType "ipv4"
    dnsTypeIpv4;

    // $ExpectType "ipv6"
    const dnsTypeIpv6: SocketDnsQueryType = "ipv6";

    // --------------------------------------------------------------------------------
    // UDPSocket
    // --------------------------------------------------------------------------------
    const udpOptions: UDPSocketOptions = {
        remoteAddress: remoteAddress,
        remotePort: remotePort,
        localAddress: localAddress,
        localPort: localPort,
        dnsQueryType: "ipv4",
        ipv6Only: false,
        sendBufferSize: 1024,
        multicastAllowAddressSharing: true,
        multicastTimeToLive: 32,
        multicastLoopback: true,
    };

    const udpSocket = new UDPSocket(udpOptions);
    // $ExpectType UDPSocket
    udpSocket;

    // $ExpectType Promise<UDPSocketOpenInfo>
    udpSocket.opened;

    // $ExpectType Promise<void>
    udpSocket.closed;

    // $ExpectType Promise<void>
    udpSocket.close();

    // Cast to 'any' or 'UDPMessage' to avoid "missing properties" error during test compilation
    // because UDPMessage likely requires 'data' which {} does not have.
    const udpMessage = {} as UDPMessage;

    // $ExpectType BufferSource | undefined
    udpMessage.data;
    // $ExpectType string | undefined
    udpMessage.remoteAddress;

    // --------------------------------------------------------------------------------
    // TCPSocket
    // --------------------------------------------------------------------------------
    const tcpOptions: TCPSocketOptions = {
        noDelay: true,
        keepAliveDelay: 300,
        dnsQueryType: "ipv6",
        receiveBufferSize: 4096,
    };

    const tcpSocket = new TCPSocket(remoteAddress, remotePort, tcpOptions);
    // $ExpectType TCPSocket
    tcpSocket;

    // $ExpectType Promise<SocketOpenInfo>
    tcpSocket.opened;

    // $ExpectType Promise<void>
    tcpSocket.closed;

    // $ExpectType Promise<void>
    tcpSocket.close();

    // --------------------------------------------------------------------------------
    // TCPServerSocket
    // --------------------------------------------------------------------------------

    // @ts-expect-error
    const invalidTcpServerOpenInfo: TCPServerSocketOpenInfo = {};

    const tcpServerOptions: TCPServerSocketOptions = {
        localPort: 0,
        backlog: 5,
        ipv6Only: false,
    };

    // Constructor
    const tcpServerSocket = new TCPServerSocket(localAddress, tcpServerOptions);
    // $ExpectType TCPServerSocket
    tcpServerSocket;

    // $ExpectType Promise<TCPServerSocketOpenInfo>
    tcpServerSocket.opened;

    // $ExpectType Promise<void>
    tcpServerSocket.closed;

    // $ExpectType Promise<void>
    tcpServerSocket.close();

    // --------------------------------------------------------------------------------
    // Open Info Structures
    // --------------------------------------------------------------------------------

    const udpOpenInfo: UDPSocketOpenInfo = {
        readable: {} as ReadableStream,
        writable: {} as WritableStream, // Only include if your d.ts actually requires this
        remoteAddress: "127.0.0.1",
        remotePort: 53,
        localAddress: "0.0.0.0",
        localPort: 4500,
    };
    // $ExpectType MulticastController | undefined
    udpOpenInfo.multicastController;

    // $ExpectType ReadableStream<any>
    udpOpenInfo.readable;

    // ============================================================================
    // TCPSocketOpenInfo (REQUIRED FIELDS TEST)
    // ============================================================================

    // @ts-expect-error
    const invalidTcpOpenInfo: TCPSocketOpenInfo = {};

    const validTcpOpenInfo: TCPSocketOpenInfo = {
        readable: {} as ReadableStream,
        writable: {} as WritableStream,
        remoteAddress: "127.0.0.1",
        remotePort: 80,
        localAddress: "192.168.1.5",
        localPort: 3000,
    };

    // $ExpectType ReadableStream<any>
    validTcpOpenInfo.readable;
    // $ExpectType WritableStream<any>
    validTcpOpenInfo.writable;
    // $ExpectType string | undefined
    validTcpOpenInfo.remoteAddress;

    // @ts-expect-error
    validTcpOpenInfo.multicastController;

    // --------------------------------------------------------------------------------
    // MulticastController
    // --------------------------------------------------------------------------------

    const multicastController = {} as MulticastController;

    // $ExpectType readonly string[]
    multicastController.joinedGroups;

    // $ExpectType Promise<void>
    multicastController.joinGroup(remoteAddress);

    // $ExpectType Promise<void>
    multicastController.leaveGroup(remoteAddress);
}
