// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module dojox {
    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/socket.html
     *
     * Provides a simple socket connection using WebSocket, or alternate
     * communication mechanisms in legacy browsers for comet-style communication. This is based
     * on the WebSocket API and returns an object that implements the WebSocket interface:
     * http://dev.w3.org/html5/websockets/#websocket
     * Provides socket connections. This can be used with virtually any Comet protocol.
     * 
     * @param argsOrUrl This uses the same arguments as the other I/O functions in Dojo, or aURL to connect to. The URL should be a relative URL in order to properlywork with WebSockets (it can still be host relative, like //other-site.org/endpoint)     
     */
    interface socket{(argsOrUrl: Object): void}
    module socket {
        /**
         * Provides a simple long-poll based comet-style socket/connection to a server and returns an
         * object implementing the WebSocket interface:
         * http://dev.w3.org/html5/websockets/#websocket
         * 
         * @param args This uses the same arguments as the other I/O functions in Dojo, with this addition:args.interval:Indicates the amount of time (in milliseconds) after a response was receivedbefore another request is made. By default, a request is made immediatelyafter getting a response. The interval can be increased to reduce load on theserver or to do simple time-based polling where the server always respondsimmediately.args.transport:Provide an alternate transport like dojo.io.script.get             
         */
        interface LongPoll{(args: Object): any}
        /**
         * 
         * @param socket             
         * @param newSocket             
         * @param listenForOpen             
         */
        interface replace{(socket: any, newSocket: any, listenForOpen: any): void}
        /**
         * A wrapper for WebSocket, than handles standard args and relative URLs
         * 
         * @param args             
         * @param fallback             
         */
        interface WebSocket{(args: any, fallback: any): void}
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/socket/Reconnect.html
         *
         * Provides auto-reconnection to a websocket after it has been closed
         * 
         * @param socket Socket to add reconnection support to.     
         * @param options     
         */
        interface Reconnect{(socket: any, options: any): void}
    }
}

declare module "dojox/socket" {
    var exp: dojox.socket
    export=exp;
}
declare module "dojox/socket/Reconnect" {
    var exp: dojox.socket.Reconnect
    export=exp;
}
