// Type definitions for simple-peer 9.1
// Project: https://github.com/feross/simple-peer
// Definitions by: Andrea Busà <https://github.com/andrycodestuffs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

declare const SimplePeer: SimplePeer.SimplePeer;

declare namespace SimplePeer {
  interface TransceiverRequest {
    kind: string;
    init?: RTCRtpTransceiverInit;
  }

  interface SignalingData {
    renegotiate: boolean;
    transceiverRequest: TransceiverRequest;
    candidate: RTCIceCandidateInit;
    sdp: string;
  }

  type Data =
    | string
    | Buffer
    | ArrayBufferView
    | ArrayBuffer
    | Blob;

  // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#error-codes
  type ErrCodes =
    | 'ERR_WEBRTC_SUPPORT'
    | 'ERR_CREATE_OFFER'
    | 'ERR_CREATE_ANSWER'
    | 'ERR_SET_LOCAL_DESCRIPTION'
    | 'ERR_SET_REMOTE_DESCRIPTION'
    | 'ERR_ADD_ICE_CANDIDATE'
    | 'ERR_ICE_CONNECTION_FAILURE'
    | 'ERR_SIGNALING'
    | 'ERR_DATA_CHANNEL';

  interface Err extends Error {
    code: ErrCodes;
  }

  interface Instance {
    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peersignaldata
    signal(data: SignalingData): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peersenddata
    send(data: Data): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peeraddstreamstream
    addStream(stream: MediaStream): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peerremovestreamstream
    removeStream(stream: MediaStream): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peeraddtracktrack-stream
    addTrack(track: MediaStreamTrack, stream: MediaStream): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peerremovetracktrack-stream
    removeTrack(track: MediaStreamTrack, stream: MediaStream): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peerdestroyerr
    destroy(err?: Err): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#duplex-stream
    write(data: Data): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#events
    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peeronsignal-function-data-
    on(event: 'signal', callback: (data: SignalingData) => void): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peeronconnect-function--
    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peeronclose-function--
    on(event: 'connect' | 'close', callback: () => void): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peerondata-function-data-
    on(event: 'data', callback: (data: Data) => void): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peeronstream-function-stream-
    on(event: 'stream', callback: (stream: MediaStream) => void): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peerontrack-function-track-stream-
    on(event: 'track', callback: (track: MediaStreamTrack, stream: MediaStream) => void): void;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peeronerror-function-err-
    on(event: 'error', callback: (err: Err) => void): void;
  }

  interface Opts {
    initiator?: boolean;                    /* set to true if this is the initiating peer */
    channelConfig?: RTCDataChannelInit;     /* custom webrtc data channel configuration (used by createDataChannel) */
    channelName?: string;                   /* custom webrtc data channel name */
    config?: RTCConfiguration;              /* custom webrtc configuration (used by RTCPeerConnection constructor) */
    offerOptions?: RTCOfferOptions;         /* custom offer options (used by createOffer method) */
    answerOptions?: RTCAnswerOptions;       /* custom answer options (used by createAnswer method) */
    sdpTransform?: (sdp: string) => string; /* function to transform the generated SDP signaling data (for advanced users) */
    stream?: MediaStream;                   /* if video/voice is desired, pass stream returned from getUserMedia */
    streams?: MediaStream[];                /* an array of MediaStreams returned from getUserMedia */
    trickle?: boolean;                      /* set to false to disable trickle ICE and get a single 'signal' event (slower) */
    wrtc?: any;                             /* custom webrtc implementation, mainly useful in node to specify in the wrtc package */
    objectMode?: boolean;                   /* set to true to create the stream in Object Mode. In this mode, incoming string data is not automatically converted to Buffer objects */
  }

  interface SimplePeer {
    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peer--new-peeropts
    new(opts?: Opts): Instance;
    (opts?: Opts): Instance;

    // https://github.com/feross/simple-peer/blob/v9.1.2/README.md#peerwebrtc_support
    readonly WEBRTC_SUPPORT: boolean;
  }
}

export = SimplePeer;
