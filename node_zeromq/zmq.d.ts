// Type definitions for ZeroMQ Node
// Project: https://github.com/JustinTulloss/zeromq.node
// Definitions by: Dave McKeown <http://github.com/davemckeown>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface EventEmitter {}

declare module 'zmq' {

    interface SocketTypes {
        pub: number;
        xpub: number;
        sub: number;
        xsub: number;
        req: number;
        xreq: number;
        rep: number;
        xrep: number;
        push: number;
        pull: number;
        dealer: number;
        router: number;
        pair: number;
    }

    interface SocketOptions {
        _fd: number;
        _ioevents: number;
        _receiveMore: number;
        _subscribe: number;
        _unsubscribe: number;
        affinity: number;
        backlog: number;
        hwm: number;
        identity: number;
        linger: number;
        mcast_loop: number;
        rate: number;
        rcvbuf: number;
        last_endpoint: number;
        reconnect_ivl: number;
        recovery_ivl: number;
        sndbuf: number;
        swap: number;
    }

    interface Socket extends EventEmitter {
        /**
         * Set `opt` to `val`.
         *
         * @param opt Option
         * @param val Value
         */
        setsocketopt(opt: number, val: any): Socket;

        /**
         * Set `opt` to `val`.
         *
         * @param opt Option
         * @param val Value
         */
        setsocketopt(opt: string, val: any): Socket;

        /**
         * Get socket `opt`.
         *
         * @param opt Option number
         */
        getsocketopt(opt: number): any;

        /**
         * Get socket `opt`.
         *
         * @param opt Option string
         */
        getsocketopt(opt: string): any;

        /**
         * Async bind.
         *
         * Emits the "bind" event.
         *
         * @param addr Socket address
         * @param cb Bind callback
         */
        bind(addr: string, callback: (error: string) => void ): Socket;

        /**
         * Sync bind.
         *
         * @param addr Socket address
         */
        bindSync(addr: string): Socket;

        /**
         * Connect to `addr`.
         *
         * @param addr Connection address
         */
        connect(addr: string): Socket;

        /**
         * Disconnect from `addr`.
         *
         * @param addr The address
         */
        disconnect(addr: string): Socket;

        /**
         * Subscribe with the given `filter`.
         *
         * @param filter The filter
         */
        subscribe(filter: string): Socket;

        /**
         * Unsubscribe with the given `filter`.
         *
         * @param filter The filter
         */
        unsubscribe(filter: string): Socket;

        /**
         * Send the given `msg`.
         *
         * @param msg The message
         * @param flags Message flags
         */
        send(msg: string, flags?: number): Socket;

        /**
         * Send the given `msg`.
         *
         * @param msg The message
         * @param flags Message flags
         */
        send(msg: ArrayBuffer, flags?: number): Socket;

        /**
        * Send the given `msg`.
        *
        * @param msg The message
        * @param flags Message flags
        */
        send(msg: any[], flags?: number): Socket;

        /**
         * Close the socket.
         *
         */
        close(): Socket;

        // Socket Options
        _fd: any;
        _ioevents: any;
        _receiveMore: any;
        _subscribe: any;
        _unsubscribe: any;
        affinity: any;
        backlog(): any;
        hwm: any;
        identity: any;
        linger: any;
        mcast_loop: any;
        rate: any;
        rcvbuf: any;
        last_endpoint: any;
        reconnect_ivl: any;
        recovery_ivl: any;
        sndbuf: any;
        swap: any;


    }

    export var version: string;
    export var types: SocketTypes;
    export var options: SocketOptions;

    function socket(type: string, options?: any): Socket;
    function socket(type: number, options?: any): Socket;
    function createSocket(type: string, options?: any): Socket;


}