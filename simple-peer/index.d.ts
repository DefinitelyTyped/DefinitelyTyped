// Type definitions for simple-peer 6.1
// Project: https://github.com/feross/simple-peer
// Definitions by: Tomasz Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from 'stream';

declare const SimplePeer: SimplePeer.SimplePeer;

declare namespace SimplePeer {
    export interface Options {
        initiator?: boolean; // set to true if this is the initiating peer
        channelConfig?: {}; // custom webrtc data channel configuration (used by createDataChannel)
        channelName?: string; // custom webrtc data channel name
        config?: {}; // custom webrtc configuration (used by RTCPeerConnection constructor)
        constraints?: {}; // custom webrtc video/voice constraints (used by RTCPeerConnection constructor)
        offerConstraints?: {}; // custom offer constraints (used by createOffer method)
        answerConstraints?: {}; // custom answer constraints (used by createAnswer method)
        reconnectTimer?: boolean | number; // wait __ milliseconds after ICE 'disconnect' for reconnect attempt before emitting 'close'
        sdpTransform?: <T extends any>(sdp: T) => T; // function to transform the generated SDP signaling data (for advanced users)
        stream?: boolean; // if video/voice is desired, pass stream returned from getUserMedia
        trickle?: boolean; // set to false to disable trickle ICE and get a single 'signal' event (slower)
        wrtc?: {}; // RTCPeerConnection/RTCSessionDescription/RTCIceCandidate
    }

    // https://github.com/feross/simple-peer/tree/v6.1.5#peer--new-simplepeeropts
    export interface SimplePeer {
        new (opts?: Options): Instance;
        (opts?: Options): Instance;

        // https://github.com/feross/simple-peer/tree/v6.1.5#peerwebrtc_support
        readonly WEBRTC_SUPPORT: boolean;
    }

    export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

    export type SimplePeerData = string | Buffer | TypedArray | ArrayBuffer | Blob;

    export interface SignalData {
        sdp?: any;
        candidate?: any;
    }

    export interface Instance extends stream.Duplex {

        // https://github.com/feross/simple-peer/tree/v6.1.5#peersignaldata
        signal(data: string | SignalData): void;

        // https://github.com/feross/simple-peer/tree/v6.1.5#peersenddata
        send(data: SimplePeerData): void;

        // https://github.com/feross/simple-peer/tree/v6.1.5#peersenddata
        destroy(onclose?: () => void): void;

        // methods which are not documented
        readonly bufferSize: number;
        address(): { port: string, family: string, address: string, };
    }
}

export = SimplePeer;
