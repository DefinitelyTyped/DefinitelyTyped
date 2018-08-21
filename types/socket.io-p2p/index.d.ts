// Type definitions for socket.io-p2p 2.2
// Project: https://github.com/socketio/socket.io-p2p
// Definitions by: Sascha Englert <https://github.com/saenglert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Socketiop2p;

export = SocketioP2PStatic;

declare function SocketioP2PStatic(
    socket: any,
    opts: SocketioP2PStatic.P2POptions,
    cb?: () => void
): SocketioP2PStatic.Socketiop2p;

declare namespace SocketioP2PStatic {
    export interface PeerOpts {
        initiator?: boolean; // false
        channelConfig?: object; // {}
        channelName?: string; // random string
        config?: object; // { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:global.stun.twilio.com:3478?transport=udp' }] }
        constraints?: object; // {}
        offerConstraints?: object; // {}
        answerConstraints?: object; // {}
        sdpTransfrom?: (sdp: any) => any; // (sdp) => sdp
        stream?: boolean; // false
        streams?: any[]; // []
        trickle?: boolean; //  true
        wrtc?: RTCPeerConnection | RTCSessionDescription | RTCIceCandidate; // {}
        objectMode?: boolean; // false
    }

    export interface P2POptions {
        numClients?: number; // 5
        autoUpgrade?: boolean; // true
        peerOpts?: PeerOpts;
    }

    export interface Socketiop2p {
        (socket: any, opts: P2POptions, cb?: () => void): Socketiop2p;
        on(event: string, callback: (data: any) => void): void;
        emit(data: any, cb: () => void): void;

        upgrade(): void;
        disconnect(): void;
        binarySlice(arr: any[], interval: number, cb: () => void): void;
        setupPeerEvents(peer: any): void;
    }
}
