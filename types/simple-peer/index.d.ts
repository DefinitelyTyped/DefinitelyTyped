// Type definitions for simple-peer 9.11
// Project: https://github.com/feross/simple-peer
// Definitions by: Tomasz Łaziuk <https://github.com/tlaziuk>
//                 xWiiLLz <https://github.com/xWiiLLz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />

import * as stream from "stream";

declare const SimplePeer: SimplePeer.SimplePeer;

declare namespace SimplePeer {
    interface Options {
        /** set to `true` if this is the initiating peer */
        initiator?: boolean | undefined;
        /** custom webrtc data channel configuration (used by [`createDataChannel`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createDataChannel)) */
        channelConfig?: RTCDataChannelInit | undefined;
        /** custom webrtc data channel name */
        channelName?: string | undefined;
        /** custom webrtc configuration (used by [`RTCPeerConnection`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection) constructor) */
        config?: RTCConfiguration | undefined;
        /** custom offer options (used by [`createOffer`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createOffer) method) */
        offerOptions?: RTCOfferOptions | undefined;
        /** custom answer options (used by [`createAnswer`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createAnswer) method) */
        answerOptions?: RTCAnswerOptions | undefined;
        /** function to transform the generated SDP signaling data (for advanced users) */
        sdpTransform?: ((this: Instance, sdp: string) => string) | undefined;
        /** if video/voice is desired, pass stream returned from [`getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) */
        stream?: MediaStream | undefined;
        /** an array of MediaStreams returned from [`getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) */
        streams?: MediaStream[] | undefined;
        /** set to `false` to disable [trickle ICE](http://webrtchacks.com/trickle-ice/) and get a single 'signal' event (slower) */
        trickle?: boolean | undefined;
        /** similar to `trickle`, needs to be set to `false` to disable trickling, defaults to `false` */
        allowHalfTrickle?: boolean | undefined;
        /** if `trickle` is set to `false`, determines how long to wait before providing an offer or answer; default value is 5000 milliseconds  */
        iceCompleteTimeout?: number | undefined;
        /** custom webrtc implementation, mainly useful in node to specify in the [wrtc](https://npmjs.com/package/wrtc) package. */
        wrtc?: {
            RTCPeerConnection: typeof RTCPeerConnection;
            RTCSessionDescription: typeof RTCSessionDescription;
            RTCIceCandidate: typeof RTCIceCandidate;
        } | undefined;
        /** set to true to create the stream in Object Mode. In this mode, incoming string data is not automatically converted to Buffer objects. */
        objectMode?: boolean | undefined;
    }
    interface SimplePeer {
        prototype: Instance;
        /**
         * Create a new WebRTC peer connection.
         *
         * A "data channel" for text/binary communication is always established, because it's cheap and often useful. For video/voice communication, pass the stream option.
         *
         * If opts is specified, then the default options (see <https://github.com/feross/simple-peer#peer--new-peeropts>) will be overridden.
         */
        new (opts?: Options): Instance;

        /** Detect native WebRTC support in the javascript environment. */
        readonly WEBRTC_SUPPORT: boolean;

        // ********************************
        // methods which are not documented
        // ********************************

        /**
         * Expose peer and data channel config for overriding all Peer
         * instances. Otherwise, just set opts.config or opts.channelConfig
         * when constructing a Peer.
         */
        config: RTCConfiguration;
        /**
         * Expose peer and data channel config for overriding all Peer
         * instances. Otherwise, just set opts.config or opts.channelConfig
         * when constructing a Peer.
         */
        channelConfig: RTCDataChannelInit;
    }

    type TypedArray =
        | Int8Array
        | Uint8Array
        | Uint8ClampedArray
        | Int16Array
        | Uint16Array
        | Int32Array
        | Uint32Array
        | Float32Array
        | Float64Array;

    type SimplePeerData = string | Buffer | TypedArray | ArrayBuffer | Blob;

    type SignalData =
        | {
              type: "transceiverRequest";
              transceiverRequest: {
                  kind: string;
                  init?: RTCRtpTransceiverInit | undefined;
              };
          }
        | {
              type: "renegotiate";
              renegotiate: true;
          }
        | {
              type: "candidate";
              candidate: RTCIceCandidate;
          }
        | RTCSessionDescriptionInit;

    interface Instance extends stream.Duplex {
        /**
         * Call this method whenever the remote peer emits a `peer.on('signal')` event.
         *
         * The `data` will encapsulate a webrtc offer, answer, or ice candidate. These messages help
         * the peers to eventually establish a direct connection to each other. The contents of these
         * strings are an implementation detail that can be ignored by the user of this module;
         * simply pass the data from 'signal' events to the remote peer and call `peer.signal(data)`
         * to get connected.
         */
        signal(data: string | SignalData): void;

        /**
         * Send text/binary data to the remote peer. `data` can be any of several types: `String`,
         * `Buffer` (see [buffer](https://github.com/feross/buffer)), `ArrayBufferView` (`Uint8Array`,
         * etc.), `ArrayBuffer`, or `Blob` (in browsers that support it).
         *
         * Note: If this method is called before the `peer.on('connect')` event has fired,
         * then an exception will be thrown. Use `peer.write(data)`
         * (which is inherited from the node.js [duplex stream](https://nodejs.org/api/stream.html) interface)
         * if you want this data to be buffered instead.
         */
        send(data: SimplePeerData): void;

        /** Add a `MediaStream` to the connection. */
        addStream(stream: MediaStream): void;

        /** Remove a `MediaStream` from the connection. */
        removeStream(stream: MediaStream): void;

        /** Add a `MediaStreamTrack` to the connection. Must also pass the `MediaStream` you want to attach it to. */
        addTrack(track: MediaStreamTrack, stream: MediaStream): void;

        /** Remove a `MediaStreamTrack` from the connection. Must also pass the `MediaStream` that it was attached to. */
        removeTrack(track: MediaStreamTrack, stream: MediaStream): void;

        /** Replace a `MediaStreamTrack` with another track. Must also pass the `MediaStream` that the old track was attached to. */
        replaceTrack(oldTrack: MediaStreamTrack, newTrack: MediaStreamTrack, stream: MediaStream): void;

        /** Add a `RTCRtpTransceiver` to the connection. Can be used to add transceivers before adding tracks. Automatically called as necessary by `addTrack`. */
        addTransceiver(kind: string, init?: RTCRtpTransceiverInit): void;

        // TODO: https://github.com/feross/simple-peer/blob/d972548299a50f836ca91c36e39304ef0f9474b7/index.js#L427
        // destroy(onclose?: () => void): void;
        /**
         * Destroy and cleanup this peer connection.
         *
         * If the optional `err` parameter is passed, then it will be emitted as an `'error'`
         * event on the stream.
         */
        destroy(error?: Error): void;

        // ********************************
        // methods which are not documented
        // ********************************

        readonly bufferSize: number;
        readonly connected: boolean;
        address():
            | { port: undefined; family: undefined; address: undefined }
            | { port: number; family: "IPv6" | "IPv4"; address: string };

        // used for debug logging
        _debug(message?: any, ...optionalParams: any[]): void;

        // ******
        // events
        // ******
        addListener(event: "connect" | "close" | "end" | "pause" | "readable" | "resume", listener: () => void): this;
        addListener(event: "signal", listener: (data: SignalData) => void): this;
        addListener(event: "stream", listener: (stream: MediaStream) => void): this;
        addListener(event: "track", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;
        addListener(event: "data", listener: (chunk: any) => void): this;
        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit(event: "connect" | "close" | "end" | "pause" | "readable" | "resume"): boolean;
        emit(event: "signal", data: SignalData): this;
        emit(event: "stream", stream: MediaStream): this;
        emit(event: "track", track: MediaStreamTrack, stream: MediaStream): this;
        emit(event: "data", chunk: any): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on(event: "connect" | "close" | "end" | "pause" | "readable" | "resume", listener: () => void): this;
        on(event: "signal", listener: (data: SignalData) => void): this;
        on(event: "stream", listener: (stream: MediaStream) => void): this;
        on(event: "track", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;
        on(event: "data", listener: (chunk: any) => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once(event: "connect" | "close" | "end" | "pause" | "readable" | "resume", listener: () => void): this;
        once(event: "signal", listener: (data: SignalData) => void): this;
        once(event: "stream", listener: (stream: MediaStream) => void): this;
        once(event: "track", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;
        once(event: "data", listener: (chunk: any) => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener(
            event: "connect" | "close" | "end" | "pause" | "readable" | "resume",
            listener: () => void,
        ): this;
        prependListener(event: "signal", listener: (data: SignalData) => void): this;
        prependListener(event: "stream", listener: (stream: MediaStream) => void): this;
        prependListener(event: "track", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;
        prependListener(event: "data", listener: (chunk: any) => void): this;
        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener(
            event: "connect" | "close" | "end" | "pause" | "readable" | "resume",
            listener: () => void,
        ): this;
        prependOnceListener(event: "signal", listener: (data: SignalData) => void): this;
        prependOnceListener(event: "stream", listener: (stream: MediaStream) => void): this;
        prependOnceListener(event: "track", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;
        prependOnceListener(event: "data", listener: (chunk: any) => void): this;
        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener(
            event: "connect" | "close" | "end" | "pause" | "readable" | "resume",
            listener: () => void,
        ): this;
        removeListener(event: "signal", listener: (data: SignalData) => void): this;
        removeListener(event: "stream", listener: (stream: MediaStream) => void): this;
        removeListener(event: "track", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;
        removeListener(event: "data", listener: (chunk: any) => void): this;
        removeListener(event: "error", listener: (err: Error) => void): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
    }
}

export = SimplePeer;
