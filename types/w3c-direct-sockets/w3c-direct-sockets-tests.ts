import {
    MulticastController,
    SocketDnsQueryType,
    TCPServerSocket,
    TCPServerSocketOpenInfo,
    TCPServerSocketOptions,
    TCPSocket,
    TCPSocketOpenInfo,
    TCPSocketOptions,
    UDPMessage,
    UDPSocket,
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

    // $ExpectType Promise<undefined>
    udpSocket.closed;

    // $ExpectType Promise<undefined>
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

    // $ExpectType Promise<TCPSocketOpenInfo>
    tcpSocket.opened;

    // $ExpectType Promise<undefined>
    tcpSocket.closed;

    // $ExpectType Promise<undefined>
    tcpSocket.close();

    // --------------------------------------------------------------------------------
    // TCPServerSocket
    // --------------------------------------------------------------------------------
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

    // $ExpectType Promise<undefined>
    tcpServerSocket.closed;

    // $ExpectType Promise<undefined>
    tcpServerSocket.close();

    // --------------------------------------------------------------------------------
    // Open Info Structures
    // --------------------------------------------------------------------------------

    const udpOpenInfo: UDPSocketOpenInfo = {};
    // $ExpectType MulticastController | undefined
    udpOpenInfo.multicastController;
    // $ExpectType ReadableStream<any> | undefined
    udpOpenInfo.readable;

    const tcpOpenInfo: TCPSocketOpenInfo = {};
    // @ts-expect-error
    tcpOpenInfo.multicastController;
    // $ExpectType WritableStream<any> | undefined
    tcpOpenInfo.writable;

    const tcpServerOpenInfo: TCPServerSocketOpenInfo = {};
    // $ExpectType ReadableStream<any> | undefined
    tcpServerOpenInfo.readable;
    // @ts-expect-error
    tcpServerOpenInfo.writable;

    // --------------------------------------------------------------------------------
    // MulticastController
    // --------------------------------------------------------------------------------

    const multicastController = {} as MulticastController;

    // $ExpectType readonly string[]
    multicastController.joinedGroups;

    // $ExpectType Promise<undefined>
    multicastController.joinGroup(remoteAddress);

    // $ExpectType Promise<undefined>
    multicastController.leaveGroup(remoteAddress);
}
