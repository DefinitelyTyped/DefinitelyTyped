/// <reference types="node" />
import { Socket } from "net";
declare namespace NodeIPC {
    class IPC {
        /**
         * Set these variables in the ipc.config scope to overwrite or set default values
         */
        config: Config;
        /**
         * https://www.npmjs.com/package/node-ipc#log
         */
        log(...args: any[]): void;
        /**
         * https://www.npmjs.com/package/node-ipc#connectto
         * Used for connecting as a client to local Unix Sockets and Windows Sockets.
         * This is the fastest way for processes on the same machine to communicate
         * because it bypasses the network card which TCP and UDP must both use.
         * @param id is the string id of the socket being connected to.
         * The socket with this id is added to the ipc.of object when created.
         * @param path is the path of the Unix Domain Socket File, if the System is Windows,
         * this will automatically be converted to an appropriate pipe with the same information as the Unix Domain Socket File.
         * If not set this will default to ipc.config.socketRoot+ipc.config.appspace+id
         * @param callback this is the function to execute when the socket has been created
         */
        connectTo(id: string, path?: string, callback?: () => void): void;
        /**
         * https://www.npmjs.com/package/node-ipc#connectto
         * Used for connecting as a client to local Unix Sockets and Windows Sockets.
         * This is the fastest way for processes on the same machine to communicate
         * because it bypasses the network card which TCP and UDP must both use.
         * @param id is the string id of the socket being connected to.
         * The socket with this id is added to the ipc.of object when created.
         * @param callback this is the function to execute when the socket has been created
         */
        connectTo(id: string, callback?: () => void): void;
        /**
         * https://www.npmjs.com/package/node-ipc#connecttonet
         * Used to connect as a client to a TCP or TLS socket via the network card.
         * This can be local or remote, if local, it is recommended that you use the Unix
         * and Windows Socket Implementaion of connectTo instead as it is much faster since it avoids the network card altogether.
         * For TLS and SSL Sockets see the node-ipc TLS and SSL docs.
         * They have a few additional requirements, and things to know about and so have their own doc.
         * @param id is the string id of the socket being connected to. For TCP & TLS sockets,
         * this id is added to the ipc.of object when the socket is created with a reference to the socket
         * @param host is the host on which the TCP or TLS socket resides.
         * This will default to ipc.config.networkHost if not specified
         * @param port the port on which the TCP or TLS socket resides
         * @param callback     this is the function to execute when the socket has been created
         */
        connectToNet(id: string, host?: string, port?: number, callback?: () => void): void;
        /**
         * https://www.npmjs.com/package/node-ipc#connecttonet
         * Used to connect as a client to a TCP or TLS socket via the network card.
         * This can be local or remote, if local, it is recommended that you use the Unix
         * and Windows Socket Implementaion of connectTo instead as it is much faster since it avoids the network card altogether.
         * For TLS and SSL Sockets see the node-ipc TLS and SSL docs.
         * They have a few additional requirements, and things to know about and so have their own doc.
         * @param id is the string id of the socket being connected to. For TCP & TLS sockets,
         * this id is added to the ipc.of object when the socket is created with a reference to the socket
         * @param callback     this is the function to execute when the socket has been created
         */
        connectToNet(id: string, callback?: () => void): void;
        /**
         * https://www.npmjs.com/package/node-ipc#connecttonet
         * Used to connect as a client to a TCP or TLS socket via the network card.
         * This can be local or remote, if local, it is recommended that you use the Unix
         * and Windows Socket Implementaion of connectTo instead as it is much faster since it avoids the network card altogether.
         * For TLS and SSL Sockets see the node-ipc TLS and SSL docs.
         * They have a few additional requirements, and things to know about and so have their own doc.
         * @param id is the string id of the socket being connected to.
         * For TCP & TLS sockets, this id is added to the ipc.of object when the socket is created with a reference to the socket
         * @param host is the host on which the TCP or TLS socket resides. This will default to ipc.config.networkHost if not specified
         * @param port the port on which the TCP or TLS socket resides
         * @param callback     this is the function to execute when the socket has been created
         */
        connectToNet(id: string, hostOrPort: number | string, callback?: () => void): void;
        /**
         * https://www.npmjs.com/package/node-ipc#disconnect
         * Used to disconnect a client from a Unix, Windows, TCP or TLS socket.
         * The socket and its refrence will be removed from memory and the ipc.of scope.
         * This can be local or remote. UDP clients do not maintain connections and so there are no Clients and this method has no value to them
         * @param id is the string id of the socket from which to disconnect
         */
        disconnect(id: string): void;
        /**
         * https://www.npmjs.com/package/node-ipc#serve
         * Used to create local Unix Socket Server or Windows Socket Server to which Clients can bind.
         * The server can emit events to specific Client Sockets, or broadcast events to all known Client Sockets
         * @param path This is the path of the Unix Domain Socket File, if the System is Windows,
         * this will automatically be converted to an appropriate pipe with the same information as the Unix Domain Socket File.
         * If not set this will default to ipc.config.socketRoot+ipc.config.appspace+id
         * @param callback This is a function to be called after the Server has started.
         * This can also be done by binding an event to the start event like ipc.server.on('start',function(){});
         */
        serve(path: string, callback?: () => void): void;
        /**
         * https://www.npmjs.com/package/node-ipc#serve
         * Used to create local Unix Socket Server or Windows Socket Server to which Clients can bind.
         * The server can emit events to specific Client Sockets, or broadcast events to all known Client Sockets
         * @param callback This is a function to be called after the Server has started.
         * This can also be done by binding an event to the start event like ipc.server.on('start',function(){});
         */
        serve(callback?: () => void): void;
        /**
         * https://www.npmjs.com/package/node-ipc#serve
         * Used to create local Unix Socket Server or Windows Socket Server to which Clients can bind.
         * The server can emit events to specific Client Sockets, or broadcast events to all known Client Sockets
         */
        serve(callback: null): void;
        /**
         * https://www.npmjs.com/package/node-ipc#servenet
         * @param host If not specified this defaults to the first address in os.networkInterfaces().
         * For TCP, TLS & UDP servers this is most likely going to be 127.0.0.1 or ::1
         * @param port The port on which the TCP, UDP, or TLS Socket server will be bound, this defaults to 8000 if not specified
         * @param UDPType If set this will create the server as a UDP socket. 'udp4' or 'udp6' are valid values.
         * This defaults to not being set. When using udp6 make sure to specify a valid IPv6 host, like ::1
         * @param callback Function to be called when the server is created
         */
        serveNet(host?: string, port?: number, UDPType?: "udp4" | "udp6", callback?: () => void): void;
        /**
         * https://www.npmjs.com/package/node-ipc#servenet
         * @param UDPType If set this will create the server as a UDP socket. 'udp4' or 'udp6' are valid values.
         * This defaults to not being set. When using udp6 make sure to specify a valid IPv6 host, like ::1
         * @param callback Function to be called when the server is created
         */
        serveNet(UDPType: "udp4" | "udp6", callback?: () => void): void;
        /**
         * https://www.npmjs.com/package/node-ipc#servenet
         * @param callback Function to be called when the server is created
         * @param port The port on which the TCP, UDP, or TLS Socket server will be bound, this defaults to 8000 if not specified
         */
        serveNet(callbackOrPort: EmptyCallback | number): void;
        /**
         * https://www.npmjs.com/package/node-ipc#servenet
         * @param host If not specified this defaults to the first address in os.networkInterfaces().
         * For TCP, TLS & UDP servers this is most likely going to be 127.0.0.1 or ::1
         * @param port The port on which the TCP, UDP, or TLS Socket server will be bound, this defaults to 8000 if not specified
         * @param callback Function to be called when the server is created
         */
        serveNet(host: string, port: number, callback?: () => void): void;
        /**
         * This is where socket connection references will be stored when connecting to them as a client via the ipc.connectTo
         * or iupc.connectToNet. They will be stored based on the ID used to create them, eg : ipc.of.mySocket
         */
        of: Record<string, Client>;
        /**
         * This is a refrence to the server created by ipc.serve or ipc.serveNet
         */
        server: Server;
    }
    type EmptyCallback = () => void;
    interface Client {
        /**
         * triggered when a JSON message is received. The event name will be the type string from your message
         * and the param will be the data object from your message eg : { type:'myEvent',data:{a:1}}
         */
        on(event: string, callback: (...args: any[]) => void): Client;
        /**
         * triggered when an error has occured
         */
        on(event: "error", callback: (err: any) => void): Client;
        /**
         * connect - triggered when socket connected
         * disconnect - triggered by client when socket has disconnected from server
         * destroy - triggered when socket has been totally destroyed, no further auto retries will happen and all references are gone
         */
        on(event: "connect" | "disconnect" | "destroy", callback: () => void): Client;
        /**
         * triggered by server when a client socket has disconnected
         */
        on(event: "socket.disconnected", callback: (socket: Socket, destroyedSocketID: string) => void): Client;
        /**
         * triggered when ipc.config.rawBuffer is true and a message is received
         */
        on(event: "data", callback: (buffer: Buffer) => void): Client;
        emit(event: string, value?: any): Client;
        /**
         * Unbind subscribed events
         */
        off(event: string, handler: any): Client;
    }
    interface Server extends Client {
        /**
         * start serving need top call serve or serveNet first to set up the server
         */
        start(): void;
        /**
         * close the server and stop serving
         */
        stop(): void;
        emit(value: any): Client;
        emit(event: string, value: any): Client;
        emit(socket: Socket | SocketConfig, event: string, value?: any): Server;
        emit(socketConfig: Socket | SocketConfig, value?: any): Server;
        broadcast(event: string, value?: any): Client;
    }
    interface SocketConfig {
        address?: string | undefined;
        port?: number | undefined;
    }
    interface Config {
        /**
         * Default: 'app.'
         * Used for Unix Socket (Unix Domain Socket) namespacing.
         * If not set specifically, the Unix Domain Socket will combine the socketRoot, appspace,
         * and id to form the Unix Socket Path for creation or binding.
         * This is available incase you have many apps running on your system, you may have several sockets with the same id,
         * but if you change the appspace, you will still have app specic unique sockets
         */
        appspace: string;
        /**
         * Default: '/tmp/'
         * The directory in which to create or bind to a Unix Socket
         */
        socketRoot: string;
        /**
         * Default: os.hostname()
         * The id of this socket or service
         */
        id: string;
        /**
         * Default: 'localhost'
         * The local or remote host on which TCP, TLS or UDP Sockets should connect
         * Should resolve to 127.0.0.1 or ::1 see the table below related to this
         */
        networkHost: string;
        /**
         * Default: 8000
         * The default port on which TCP, TLS, or UDP sockets should connect
         */
        networkPort: number;
        /**
         * Default: false
         * Makes the pipe readable for all users including windows services
         */
        readableAll: boolean;
        /**
         * Default: false
         * Makes the pipe writable for all users including windows services
         */
        writableAll: boolean;
        /**
         * Default: 'utf8'
         * the default encoding for data sent on sockets. Mostly used if rawBuffer is set to true.
         * Valid values are : ascii utf8 utf16le ucs2 base64 hex
         */
        encoding: "ascii" | "utf8" | "utf16le" | "ucs2" | "base64" | "hex";
        /**
         * Default: false
         * If true, data will be sent and received as a raw node Buffer NOT an Object as JSON.
         * This is great for Binary or hex IPC, and communicating with other processes in languages like C and C++
         */
        rawBuffer: boolean;
        /**
         * Default: false
         * Synchronous requests. Clients will not send new requests until the server answers
         */
        sync: boolean;
        /**
         * Default: false
         * Turn on/off logging default is false which means logging is on
         */
        silent: boolean;
        /**
         * Default: true
         * Turn on/off util.inspect colors for ipc.log
         */
        logInColor: boolean;
        /**
         * Default: 5
         * Set the depth for util.inspect during ipc.log
         */
        logDepth: number;
        /**
         * Default: console.log
         * The function which receives the output from ipc.log; should take a single string argument
         */
        logger(msg: string): void;
        /**
         * Default: 100
         * This is the max number of connections allowed to a socket. It is currently only being set on Unix Sockets.
         * Other Socket types are using the system defaults
         */
        maxConnections: number;
        /**
         * Default: 500
         * This is the time in milliseconds a client will wait before trying to reconnect to a server if the connection is lost.
         * This does not effect UDP sockets since they do not have a client server relationship like Unix Sockets and TCP Sockets
         */
        retry: number;
        /*  */
        /**
         * Default: false
         * if set, it represents the maximum number of retries after each disconnect before giving up
         * and completely killing a specific connection
         */
        maxRetries: boolean | number;
        /**
         * Default: false
         * Defaults to false meaning clients will continue to retry to connect to servers indefinitely at the retry interval.
         * If set to any number the client will stop retrying when that number is exceeded after each disconnect.
         * If set to true in real time it will immediately stop trying to connect regardless of maxRetries.
         * If set to 0, the client will NOT try to reconnect
         */
        stopRetrying: boolean;
        /**
         * Default: true
         * Defaults to true meaning that the module will take care of deleting the IPC socket prior to startup.
         * If you use node-ipc in a clustered environment where there will be multiple listeners on the same socket,
         * you must set this to false and then take care of deleting the socket in your own code.
         */
        unlink: boolean;
        /**
         * Primarily used when specifying which interface a client should connect through.
         * see the socket.connect documentation in the node.js api https://nodejs.org/api/net.html#net_socket_connect_options_connectlistener
         */
        interfaces: {
            /**
             * Default: false
             */
            localAddress?: boolean | undefined;
            /**
             * Default: false
             */
            localPort?: boolean | undefined;
            /**
             * Default: false
             */
            family?: boolean | undefined;
            /**
             * Default: false
             */
            hints?: boolean | undefined;
            /**
             * Default: false
             */
            lookup?: boolean | undefined;
        };
        tls: {
            rejectUnauthorized?: boolean | undefined;
            public?: string | undefined;
            private?: string | undefined;
        };
    }
}

declare const RootIPC: NodeIPC.IPC & { IPC: new() => NodeIPC.IPC };

export = RootIPC;
