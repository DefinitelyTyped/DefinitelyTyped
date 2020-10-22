// Type definitions for kurento-utils 6.7
// Project: https://github.com/Kurento/kurento-utils-js, https://www.kurento.org
// Definitions by: Miloslav Nenadál <https://github.com/nenadalm>
//                 Benjamin Riggs <https://github.com/riggs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { EventEmitter } from 'events';

export class WebRtcPeer extends EventEmitter {
    /**
     * Using this property the user can get the peerConnection and use it directly.
     */
    peerConnection: RTCPeerConnection;

    constructor(
        mode: 'recv' | 'send' | 'sendRecv',
        options?: object,
        callback?: (error: string | undefined) => void
    );

    /**
     * Use this method for showing the local video.
     */
    showLocalVideo: () => void;
    /**
     * Using this method the user can get the local stream. You can use muted property to silence the audio, if this property is true.
     */
    getLocalStream: () => MediaStream;
    /**
     * Using this method the user can get the remote stream.
     */
    getRemoteStream: () => MediaStream;
    /**
     * Callback function invoked when a SDP answer is received. Developers are expected to invoke this function in order to complete the SDP negotiation. This method has two parameters:
     *
     * @param sdpAnswer Description of sdpAnswer
     * @param callback It is a function with error like parameter. It is called when the remote description has been set successfully.
     */
    processAnswer: (
        sdpAnswer: string,
        callback?: (error: string | undefined) => void
    ) => void;
    /**
     * Callback function invoked when a SDP offer is received. Developers are expected to invoke this function in order to complete the SDP negotiation. This method has two parameters:
     *
     * @param sdpOffer Description of sdpOffer
     * @param callback It is a function with error and sdpAnswer like parameters. It is called when the remote description has been set successfully.
     */
    processOffer: (
        sdpOffer: string,
        callback?: (error: string | undefined, sdp: string) => void
    ) => void;
    /**
     * This method frees the resources used by WebRtcPeer.
     */
    dispose: () => void;
    /**
     * Callback function invoked when an ICE candidate is received. Developers are expected to invoke this function in order to complete the SDP negotiation. This method has two parameters:
     *
     * @param iceCandidate Literal object with the ICE candidate description
     * @param callback It is a function with error like parameter. It is called when the ICE candidate has been added.
     */
    addIceCandidate: (
        iceCandidate: RTCIceCandidate,
        callback?: (error: string | undefined) => void
    ) => void;
    /**
     * Using this method the user can get peerconnection’s local session descriptor.
     */
    getLocalSessionDescriptor: () => RTCSessionDescription;
    /**
     * Using this method the user can get peerconnection’s remote session descriptor.
     */
    getRemoteSessionDescriptor: () => RTCSessionDescription;
    /**
     * Creates an offer that is a request to find a remote peer with a specific configuration.
     */
    generateOffer: (
        callback: (error: string | undefined, sdp: string) => void
    ) => void;
    /**
     * Create a WebRtcPeer as receive only.
     */
    static WebRtcPeerRecvonly: (
        options: object,
        callback: (error: string | undefined) => void
    ) => WebRtcPeer;

    /**
     * Create a WebRtcPeer as send only.
     */
    static WebRtcPeerSendonly: (
        options: object,
        callback: (error: string | undefined) => void
    ) => WebRtcPeer;

    /**
     * Create a WebRtcPeer as send and receive.
     */
    static WebRtcPeerSendrecv: (
        options: object,
        callback: (error: string | undefined) => void
    ) => WebRtcPeer;
}
