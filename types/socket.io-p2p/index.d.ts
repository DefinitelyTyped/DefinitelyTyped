// Type definitions for socket.io-p2p 2.2
// Project: https://github.com/socketio/socket.io-p2p
// Definitions by: Sascha Englert <https://github.com/saenglert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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
    cb?: () => void
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
    initiator?: boolean;
    /**
     * Custom WebRTC channel configuration (used by createDataChannel)
     * @default {}
     */
    channelConfig?: object;
    /**
     * Custom WebRTC data channel name
     * @default <randomString>
     */
    channelName?: string;
    /**
     * Custom WebRTC configuration (used by RTCPeerConnection constructor)
     * @default {iceServers:[{urls:'stun:stun.l.google.com:19302'},{urls:'stun:global.stun.twilio.com:3478?transport=udp'}]}
     */
    config?: object;
    /**
     * Custom WebRTC video/voice constrainst (used by RTCPeerConnection constructor)
     * @default {}
     */
    constraints?: object;
    /**
     * Custom offer contstraints (used by createOffer methode)
     * @default {}
     */
    offerConstraints?: object;
    /**
     * Custom answer constraints (used by createAnswer method)
     */
    answerConstraints?: object;
    /**
     * Function to transform generated SDP signaling data (for advanced users)
     * @default (sdp)=>sdp
     */
    sdpTransfrom?: (sdp: any) => any;
    /**
     * If video/voice is desired, pass stream from getUserMedia
     * @default false
     */
    stream?: boolean;
    /**
     * An array of MediaStreams returned from getUserMedia
     * @default []
     */
    streams?: MediaStream[];
    /**
     * Set to false to disable trickle ICE and get single 'signal' event (slower)
     * @default true
     */
    trickle?: boolean;
    /**
     * Custom WebRTC implementation, mainly useful in node to specify the wrtc package
     * @default {}
     */
    wrtc?: RTCPeerConnection | RTCSessionDescription | RTCIceCandidate;
    /**
     * Set to true to create the stream in Object Mode. In this mode, incoming string data is not automatically converted to Buffer objects
     * @default false
     */
    objectMode?: boolean;
  }

  interface P2POptions {
    /**
     * Max number of peers each client can connect to
     * @default 5
     */
    numClients?: number;
    /**
     * Upgrade to p2p connection (from s.io one) when peers are ready
     * @default true
     */
    autoUpgrade?: boolean;
    /**
     * Object of options passed to underlying peers
     * @default {}
     */
    peerOpts?: PeerOpts;
  }
}
