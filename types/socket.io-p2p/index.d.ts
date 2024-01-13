export as namespace Socketiop2p;

export = SocketioP2PStatic;

/**
 * Creates the P2P object
 * @param socket Socket.io socket
 * @param opts Object of viable options
 * @param cb Optional callback
 */
declare class SocketioP2PStatic {
    useSockets: boolean;
    usePeerConnection: boolean;
    decoder: any;
    socket: any;
    cb: () => void;
    defaultOps: SocketioP2PStatic.DefaultOps;
    opts: SocketioP2PStatic.P2POptions;
    peerOpts: SocketioP2PStatic.PeerOpts;
    numConnectedClients: number;

    constructor(
        socket: any,
        opts?: SocketioP2PStatic.P2POptions,
        cb?: () => void,
    );

    on(event: string, callback: (data: any) => void): void;
    emit(eventName: any, data: any): void;

    /**
     * Upgrade the connection to p2p
     */
    upgrade(): void;
    disconnect(): void;
    binarySlice(arr: any[], interval: number, cb: () => void): void;
    setupPeerEvents(peer: any): void;
}

declare namespace SocketioP2PStatic {
    interface DefaultOps {
        autoUpgrade: boolean;
        numClients: number;
    }
    interface PeerOpts {
        /**
         * Set to true if this is the initiating peer
         * @default false
         */
        initiator?: boolean | undefined;
        /**
         * Custom WebRTC channel configuration (used by createDataChannel)
         * @default {}
         */
        channelConfig?: object | undefined;
        /**
         * Custom WebRTC data channel name
         * @default <randomString>
         */
        channelName?: string | undefined;
        /**
         * Custom WebRTC configuration (used by RTCPeerConnection constructor)
         * @default {iceServers:[{urls:'stun:stun.l.google.com:19302'},{urls:'stun:global.stun.twilio.com:3478?transport=udp'}]}
         */
        config?: object | undefined;
        /**
         * Custom WebRTC video/voice constrainst (used by RTCPeerConnection constructor)
         * @default {}
         */
        constraints?: object | undefined;
        /**
         * Custom offer contstraints (used by createOffer methode)
         * @default {}
         */
        offerConstraints?: object | undefined;
        /**
         * Custom answer constraints (used by createAnswer method)
         */
        answerConstraints?: object | undefined;
        /**
         * Function to transform generated SDP signaling data (for advanced users)
         * @default (sdp)=>sdp
         */
        sdpTransfrom?: ((sdp: any) => any) | undefined;
        /**
         * If video/voice is desired, pass stream from getUserMedia
         * @default false
         */
        stream?: boolean | undefined;
        /**
         * An array of MediaStreams returned from getUserMedia
         * @default []
         */
        streams?: MediaStream[] | undefined;
        /**
         * Set to false to disable trickle ICE and get single 'signal' event (slower)
         * @default true
         */
        trickle?: boolean | undefined;
        /**
         * Custom WebRTC implementation, mainly useful in node to specify the wrtc package
         * @default {}
         */
        wrtc?: RTCPeerConnection | RTCSessionDescription | RTCIceCandidate | undefined;
        /**
         * Set to true to create the stream in Object Mode. In this mode, incoming string data is not automatically converted to Buffer objects
         * @default false
         */
        objectMode?: boolean | undefined;
    }

    interface P2POptions {
        /**
         * Max number of peers each client can connect to
         * @default 5
         */
        numClients?: number | undefined;
        /**
         * Upgrade to p2p connection (from s.io one) when peers are ready
         * @default true
         */
        autoUpgrade?: boolean | undefined;
        /**
         * Object of options passed to underlying peers
         * @default {}
         */
        peerOpts?: PeerOpts | undefined;
    }
}
