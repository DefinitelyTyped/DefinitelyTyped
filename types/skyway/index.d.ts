// Type definitions for SkyWay
// Project: http://nttcom.github.io/skyway/
// Definitions by: Toshiya Nakakura <https://github.com/nakakura>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="webrtc" />

declare namespace PeerJs{
    interface PeerJSOption{
        key?: string;
        host?: string;
        port?: number;
        path?: string;
        secure?: boolean;
        turn?: boolean;
        config?: RTCPeerConnectionConfig;
        debug?: number;
    }

    interface PeerConnectOption{
        label?: string;
        metadata?: any;
        serialization?: string;
        reliable?: boolean;
    }

    interface DataConnection{
        send(data: any): void;
        close(): void;
        on(event: string, cb: ()=>void): void;
        on(event: 'data', cb: (data: any)=>void): void;
        on(event: 'open', cb: ()=>void): void;
        on(event: 'close', cb: ()=>void): void;
        on(event: 'error', cb: (err: any)=>void): void;
        off(event: string, fn: Function, once?: boolean): void;
        bufferSize: number;
        dataChannel: RTCDataChannel;
        label: string;
        metadata: any;
        open: boolean;
        peerConnection: any;
        peer: string;
        reliable: boolean;
        serialization: string;
        type: string;
    }

    interface MediaConnection{
        answer(stream?: any): void;
        close(): void;
        on(event: string, cb: ()=>void): void;
        on(event: 'stream', cb: (stream: any)=>void): void;
        on(event: 'close', cb: ()=>void): void;
        on(event: 'error', cb: (err: any)=>void): void;
        off(event: string, fn: Function, once?: boolean): void;
        open: boolean;
        metadata: any;
        peer: string;
        type: string;
    }

    interface utilSupportsObj {
        audioVideo: boolean;
        data: boolean;
        binary: boolean;
        reliable: boolean;
    }

    interface util{
        browser: string;
        supports: utilSupportsObj;
    }

    export interface Peer{
        /**
         *
         * @param id The brokering ID of the remote peer (their peer.id).
         * @param options for specifying details about Peer Connection
         */
        connect(id: string, options?: PeerJs.PeerConnectOption): PeerJs.DataConnection;
        /**
         * Connects to the remote peer specified by id and returns a data connection.
         * @param id The brokering ID of the remote peer (their peer.id).
         * @param stream The caller's media stream
         */
        call(id: string, stream: any): PeerJs.MediaConnection;
        /**
         * Calls the remote peer specified by id and returns a media connection.
         * @param event Event name
         * @param cb Callback Function
         */
        on(event: string, cb: ()=>void): void;
        /**
         * Emitted when a connection to the PeerServer is established.
         * @param event Event name
         * @param cb id is the brokering ID of the peer
         */
        on(event: 'open', cb: (id: string)=>void): void;
        /**
         * Emitted when a new data connection is established from a remote peer.
         * @param event Event name
         * @param cb Callback Function
         */
        on(event: 'connection', cb: (dataConnection: PeerJs.DataConnection)=>void): void;
        /**
         * Emitted when a remote peer attempts to call you.
         * @param event Event name
         * @param cb Callback Function
         */
        on(event: 'call', cb: (mediaConnection: PeerJs.MediaConnection)=>void): void;
        /**
         * Emitted when the peer is destroyed and can no longer accept or create any new connections.
         * @param event Event name
         * @param cb Callback Function
         */
        on(event: 'close', cb: ()=>void): void;
        /**
         * Emitted when the peer is disconnected from the signalling server
         * @param event Event name
         * @param cb Callback Function
         */
        on(event: 'disconnected', cb: ()=>void): void;
        /**
         * Errors on the peer are almost always fatal and will destroy the peer.
         * @param event Event name
         * @param cb Callback Function
         */
        on(event: 'error', cb: (err: any)=>void): void;
        /**
         * Remove event listeners.(EventEmitter3)
         * @param {String} event The event we want to remove.
         * @param {Function} fn The listener that we need to find.
         * @param {Boolean} once Only remove once listeners.
         */
        off(event: string, fn: Function, once?: boolean): void;
        /**
         * Close the connection to the server, leaving all existing data and media connections intact.
         */
        disconnect(): void;
        /**
         * Close the connection to the server and terminate all existing connections.
         */
        destroy(): void;
        /**
         * Get a list of available peer IDs
         * @param callback
         */
        listAllPeers(callback: (peerIds: Array<string>)=>void): void;

        /**
         * The brokering ID of this peer
         */
        id: string;
        /**
         * A hash of all connections associated with this peer, keyed by the remote peer's ID.
         */
        connections: any;
        /**
         * false if there is an active connection to the PeerServer.
         */
        disconnected: boolean;
        /**
         * true if this peer and all of its connections can no longer be used.
         */
        destroyed: boolean;
    }
}

declare var Peer: {
    prototype: RTCIceServer;
    /**
     * A peer can connect to other peers and listen for connections.
     * @param id Other peers can connect to this peer using the provided ID.
     *     If no ID is given, one will be generated by the brokering server.
     * @param options for specifying details about PeerServer
     */
    new (id: string, options?: PeerJs.PeerJSOption): PeerJs.Peer;

    /**
     * A peer can connect to other peers and listen for connections.
     * @param options for specifying details about PeerServer
     */
    new (options: PeerJs.PeerJSOption): PeerJs.Peer;
};
