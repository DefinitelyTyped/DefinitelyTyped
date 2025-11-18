import {
    UDPSocket,
    UDPSocketOptions,
    UDPSocketOpenInfo,
    TCPSocket,
    TCPSocketOptions,
    TCPSocketOpenInfo,
    TCPServerSocket,
    TCPServerSocketOptions,
    TCPServerSocketOpenInfo,
    SocketDnsQueryType,
    UDPMessage,
    SocketOptions,
    MulticastController,
} from 'isolated-web-apps';

async function testDirectSockets() {
    const remoteAddress = '192.168.1.1';
    const localAddress = '0.0.0.0';
    const remotePort = 8080;
    const localPort = 3000;

    // --------------------------------------------------------------------------------
    // SocketDnsQueryType (Enum Test)
    // --------------------------------------------------------------------------------
    const dnsTypeIpv4: SocketDnsQueryType = 'ipv4';
    // $ExpectType "ipv4"
    dnsTypeIpv4;
    
    // $ExpectType "ipv6"
    'ipv6';
    
    // --------------------------------------------------------------------------------
    // UDPSocket
    // --------------------------------------------------------------------------------
    const udpOptions: UDPSocketOptions = {
        remoteAddress: remoteAddress,
        remotePort: remotePort,
        localAddress: localAddress,
        localPort: localPort,
        dnsQueryType: 'ipv4',
        ipv6Only: false,
        sendBufferSize: 1024,
        multicastAllowAddressSharing: true,
        multicastTimeToLive: 32,
        multicastLoopback: true,
    };

    // Constructor
    const udpSocket = new UDPSocket(udpOptions);
    // $ExpectType UDPSocket
    udpSocket;

    // Attributes
    const udpOpened = udpSocket.opened;
    // $ExpectType Promise<UDPSocketOpenInfo>
    udpOpened;

    const udpClosed = udpSocket.closed;
    // $ExpectType Promise<undefined>
    udpClosed;

    // Method
    const udpClose = udpSocket.close();
    // $ExpectType Promise<undefined>
    udpClose;

    // UDPMessage structure
    const udpMessage: UDPMessage = {};
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
        dnsQueryType: 'ipv6',
        receiveBufferSize: 4096,
    };

    // Constructor
    const tcpSocket = new TCPSocket(remoteAddress, remotePort, tcpOptions);
    // $ExpectType TCPSocket
    tcpSocket;

    // $ExpectType Promise<SocketOpenInfo>
    tcpSocket.opened;

    // $ExpectType Promise<undefined>
    tcpSocket.closed;

    // Method
    const tcpClose = tcpSocket.close();
    // $ExpectType Promise<undefined>
    tcpClose;

    // --------------------------------------------------------------------------------
    // 4. TCPServerSocket
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

    // Attributes
    const tcpServerOpened = tcpServerSocket.opened;
    // $ExpectType Promise<TCPServerSocketOpenInfo>
    tcpServerOpened;

    const tcpServerClosed = tcpServerSocket.closed;
    // $ExpectType Promise<undefined>
    tcpServerClosed;

    // Method
    const tcpServerClose = tcpServerSocket.close();
    // $ExpectType Promise<undefined>
    tcpServerClose;

    // --------------------------------------------------------------------------------
    // Open Info Structures (Inheritance and Extensions)
    // --------------------------------------------------------------------------------
    
    // Check UDPSocketOpenInfo extension
    const udpOpenInfo: UDPSocketOpenInfo = {};
    // $ExpectType MulticastController | undefined
    udpOpenInfo.multicastController;
    // $ExpectType ReadableStream<any> | undefined
    udpOpenInfo.readable; // Inherited from SocketOpenInfo
    
    // Check TCPSocketOpenInfo alias (should match SocketOpenInfo)
    const tcpOpenInfo: TCPSocketOpenInfo = {};
    // @ts-expect-error MulticastController should not exist on TCPSocketOpenInfo
    tcpOpenInfo.multicastController; 
    // $ExpectType WritableStream<any> | undefined
    tcpOpenInfo.writable;

    // Check TCPServerSocketOpenInfo
    const tcpServerOpenInfo: TCPServerSocketOpenInfo = {};
    // $ExpectType ReadableStream<any> | undefined
    tcpServerOpenInfo.readable;
    // @ts-expect-error WritableStream should not exist on TCPServerSocketOpenInfo
    tcpServerOpenInfo.writable;

    // --------------------------------------------------------------------------------
    // MulticastController (Global Augmentation Test)
    // --------------------------------------------------------------------------------
    
    // Note: MulticastController is exposed via UDPSocketOpenInfo
    let multicastController: MulticastController = {} as MulticastController;

    // Attributes
    // $ExpectType readonly string[]
    multicastController.joinedGroups;
    
    // Methods
    const joinPromise = multicastController.joinGroup(remoteAddress);
    // $ExpectType Promise<undefined>
    joinPromise;

    const leavePromise = multicastController.leaveGroup(remoteAddress);
    // $ExpectType Promise<undefined>
    leavePromise;
}