// Type definitions for WebRTC
// Project: http://dev.w3.org/2011/webrtc/
// Definitions by: Ken Smith <https://github.com/smithkl42/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// W3 Spec: https://www.w3.org/TR/webrtc/#idl-def-RTCIceServer

/// <reference path='MediaStream.d.ts' />

// TODO(1): Get Typescript to have string-enum types as WebRtc is full of string
// enums.
// https://typescript.codeplex.com/discussions/549207

// TODO(2): get Typescript to have union types as WebRtc uses them.
// https://typescript.codeplex.com/workitem/1364

// https://www.w3.org/TR/webrtc/#idl-def-RTCIceTransportPolicy
type RTCIceTransportPolicy = 'public' | 'relay' | 'all';

// https://www.w3.org/TR/webrtc/#idl-def-RTCBundlePolicy
type RTCBundlePolicy = 'balanced' | 'max-compat' | 'max-bundle';

// https://www.w3.org/TR/webrtc/#idl-def-RTCRtcpMuxPolicy
type RTCRtcpMuxPolicy = 'negotiate' | 'require';

// https://www.w3.org/TR/webrtc/#idl-def-RTCCertificate
interface RTCCertificate {
    expires: number;
}

// https://www.w3.org/TR/webrtc/#idl-def-RTCConfiguration
// https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/RTCPeerConnection#RTCConfiguration_dictionary
interface RTCConfiguration {
  iceServers           ?: RTCIceServer[];        // optional according to mozilla docs
  iceTransportPolicy   ?: RTCIceTransportPolicy; // default = 'all'
  bundlePolicy         ?: RTCBundlePolicy;       // default = 'balanced'
  rtcpMuxPolicy        ?: RTCRtcpMuxPolicy;      // default = 'require'
  peerIdentity         ?: string;                // default = null
  certificates         ?: RTCCertificate[];      // default is auto-generated
  iceCandidatePoolSize ?: number;                // default = 0
}

declare var RTCConfiguration: {
  prototype: RTCConfiguration;
  new (): RTCConfiguration;
};

// https://www.w3.org/TR/webrtc/#idl-def-RTCIceCredentialType
type RTCIceCredentialType = 'password' | 'token';

// https://www.w3.org/TR/webrtc/#idl-def-RTCIceServer
interface RTCIceServer {
  urls: string | string[];
  username?: string;
  credential?: string;
  credentialType?: RTCIceCredentialType; // default = 'password'
}
declare var RTCIceServer: {
  prototype: RTCIceServer;
  new (): RTCIceServer;
};

// moz (Firefox) specific prefixes.
interface mozRTCPeerConnection extends RTCPeerConnection {
}
declare var mozRTCPeerConnection: {
  prototype: mozRTCPeerConnection;
  new (settings?: RTCConfiguration,
       constraints?:RTCMediaConstraints): mozRTCPeerConnection;
};
// webkit (Chrome) specific prefixes.
interface webkitRTCPeerConnection extends RTCPeerConnection {
}
declare var webkitRTCPeerConnection: {
  prototype: webkitRTCPeerConnection;
  new (settings?: RTCConfiguration,
       constraints?:RTCMediaConstraints): webkitRTCPeerConnection;
};

// For Chrome, look at the code here:
// https://code.google.com/p/chromium/codesearch#chromium/src/third_party/libjingle/source/talk/app/webrtc/webrtcsession.cc&sq=package:chromium&dr=C&l=63
interface RTCOptionalMediaConstraint {
  // When true, will use DTLS/SCTP data channels
  DtlsSrtpKeyAgreement?: boolean;
  // When true will use Rtp-based data channels (depreicated)
  RtpDataChannels?: boolean;
}

// ks 12/20/12 - There's more here that doesn't seem to be documented very well yet.
// http://www.w3.org/TR/2013/WD-webrtc-20130910/
interface RTCMediaConstraints {
  mandatory?: RTCMediaOfferConstraints;
  optional?: RTCOptionalMediaConstraint[]
}

interface RTCMediaOfferConstraints {
  offerToReceiveAudio: boolean;
  offerToReceiveVideo: boolean;
}

interface RTCSessionDescriptionInit {
  type: string;  // RTCSdpType; See TODO(1)
  sdp: string;
}

interface RTCSessionDescription {
  type?: string;  // RTCSdpType; See TODO(1)
  sdp?: string;
}
declare var RTCSessionDescription: {
  prototype: RTCSessionDescription;
  new (descriptionInitDict?: RTCSessionDescriptionInit): RTCSessionDescription;
  // TODO: Add serializer.
  // See: http://dev.w3.org/2011/webrtc/editor/webrtc.html#idl-def-RTCSdpType)
};

interface webkitRTCSessionDescription extends RTCSessionDescription{
  type?: string;
  sdp?: string;
}
declare var webkitRTCSessionDescription: {
  prototype: webkitRTCSessionDescription;
  new (descriptionInitDict?: RTCSessionDescriptionInit): webkitRTCSessionDescription;
};

interface mozRTCSessionDescription extends RTCSessionDescription{
  type?: string;
  sdp?: string;
}
declare var mozRTCSessionDescription: {
  prototype: mozRTCSessionDescription;
  new (descriptionInitDict?: RTCSessionDescriptionInit): mozRTCSessionDescription;
};



interface RTCDataChannelInit {
  ordered             ?: boolean; // messages must be sent in-order.
  maxPacketLifeTime   ?: number;  // unsigned short
  maxRetransmits      ?: number;  // unsigned short
  protocol            ?: string;  // default = ''
  negotiated          ?: boolean; // default = false;
  id                  ?: number;  // unsigned short
}

// TODO(1)
declare enum RTCSdpType {
  // http://dev.w3.org/2011/webrtc/editor/webrtc.html#rtcsdptype
  'offer',
  'pranswer',
  'answer'
}

interface RTCMessageEvent {
  // http://dev.w3.org/2011/webrtc/editor/webrtc.html#event-datachannel-message
  // At present, this can be an: ArrayBuffer, a string, or a Blob.
  // See TODO(2)
  data: any;
}

// TODO(1)
declare enum RTCDataChannelState {
  // http://dev.w3.org/2011/webrtc/editor/webrtc.html#idl-def-RTCDataChannelState
  'connecting',
  'open',
  'closing',
  'closed'
}

interface RTCDataChannel extends EventTarget {
  label: string;
  reliable: boolean;
  readyState: string; // RTCDataChannelState; see TODO(1)
  bufferedAmount: number;
  binaryType: string;

  onopen: (event: Event) => void;
  onerror: (event: Event) => void;
  onclose: (event: Event) => void;
  onmessage: (event: RTCMessageEvent) => void;

  close(): void;

  send(data: string): void ;
  send(data: ArrayBuffer): void;
  send(data: ArrayBufferView): void;
  send(data: Blob): void;
}
declare var RTCDataChannel: {
  prototype: RTCDataChannel;
  new (): RTCDataChannel;
};

// https://www.w3.org/TR/webrtc/#rtcdatachannelevent
interface RTCDataChannelEvent extends Event {
  channel: RTCDataChannel;
}
declare var RTCDataChannelEvent: {
  prototype: RTCDataChannelEvent;
  new (eventInitDict: RTCDataChannelEventInit): RTCDataChannelEvent;
};

interface RTCIceCandidateEvent extends Event {
  candidate: RTCIceCandidate;
}

interface RTCMediaStreamEvent extends Event {
  stream: MediaStream;
}

interface EventInit {
}

interface RTCDataChannelEventInit extends EventInit {
  channel: RTCDataChannel;
}

interface RTCVoidCallback {
  (): void;
}
interface RTCSessionDescriptionCallback {
  (sdp: RTCSessionDescription): void;
}
interface RTCPeerConnectionErrorCallback {
  (errorInformation: DOMError): void;
}

// TODO(1)
declare enum RTCIceGatheringState {
  // http://dev.w3.org/2011/webrtc/editor/webrtc.html#rtcicegatheringstate-enum
  'new',
  'gathering',
  'complete'
}

// TODO(1)
declare enum RTCIceConnectionState {
  // http://dev.w3.org/2011/webrtc/editor/webrtc.html#idl-def-RTCIceConnectionState
  'new',
  'checking',
  'connected',
  'completed',
  'failed',
  'disconnected',
  'closed'
}

// TODO(1)
declare enum RTCSignalingState {
  // http://dev.w3.org/2011/webrtc/editor/webrtc.html#idl-def-RTCSignalingState
  'stable',
  'have-local-offer',
  'have-remote-offer',
  'have-local-pranswer',
  'have-remote-pranswer',
  'closed'
}

// This is based on the current implementation of WebRtc in Chrome; the spec is
// a little unclear on this.
// http://dev.w3.org/2011/webrtc/editor/webrtc.html#idl-def-RTCStatsReport
interface RTCStatsReport {
  stat(id: string): string;
}

interface RTCStatsCallback {
  (report: RTCStatsReport): void;
}

interface RTCOfferAnswerOptions {
    voiceActivityDetection ?: boolean; // default = true
}

interface RTCOfferOptions extends RTCOfferAnswerOptions {
    iceRestart ?: boolean; // default = false
}

interface RTCAnswerOptions extends RTCOfferAnswerOptions { }

interface RTCPeerConnection {

  createOffer(options?: RTCOfferOptions): Promise<RTCSessionDescription>;
  createOffer(successCallback: RTCSessionDescriptionCallback,
              failureCallback?: RTCPeerConnectionErrorCallback,
              constraints?: RTCMediaConstraints): void; // Deprecated
  createAnswer(options?: RTCAnswerOptions): Promise<RTCSessionDescription>;
  createAnswer(successCallback: RTCSessionDescriptionCallback,
               failureCallback?: RTCPeerConnectionErrorCallback,
               constraints?: RTCMediaConstraints): void; // Deprecated
  setLocalDescription(description: RTCSessionDescription | RTCSessionDescriptionInit): Promise<void>;
  setLocalDescription(description: RTCSessionDescription,
                      successCallback?: RTCVoidCallback,
                      failureCallback?: RTCPeerConnectionErrorCallback): void; // Deprecated
  setRemoteDescription(description: RTCSessionDescription | RTCSessionDescriptionInit): Promise<void>;
  setRemoteDescription(description: RTCSessionDescription,
                        successCallback?: RTCVoidCallback,
                        failureCallback?: RTCPeerConnectionErrorCallback): void;
  localDescription: RTCSessionDescription;
  remoteDescription: RTCSessionDescription;
  signalingState: string; // RTCSignalingState; see TODO(1)
  updateIce(configuration?: RTCConfiguration,
            constraints?: RTCMediaConstraints): void;
  addIceCandidate(candidate: RTCIceCandidate): Promise<void>;
  addIceCandidate(candidate:RTCIceCandidate,
                  successCallback:() => void,
                  failureCallback:RTCPeerConnectionErrorCallback): void;
  iceGatheringState: string;  // RTCIceGatheringState; see TODO(1)
  iceConnectionState: string;  // RTCIceConnectionState; see TODO(1)
  getLocalStreams(): MediaStream[];
  getRemoteStreams(): MediaStream[];
  createDataChannel(label?: string,
                    dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
  ondatachannel: (event: RTCDataChannelEvent) => void;
  addStream(stream: MediaStream, constraints?: RTCMediaConstraints): void;
  removeStream(stream: MediaStream): void;
  close(): void;
  onnegotiationneeded: (event: Event) => void;
  onconnecting: (event: Event) => void;
  onopen: (event: Event) => void;
  onaddstream: (event: RTCMediaStreamEvent) => void;
  onremovestream: (event: RTCMediaStreamEvent) => void;
  onstatechange: (event: Event) => void;
  oniceconnectionstatechange: (event: Event) => void;
  onicecandidate: (event: RTCIceCandidateEvent) => void;
  onidentityresult: (event: Event) => void;
  onsignalingstatechange: (event: Event) => void;
  getStats(selector: MediaStreamTrack): Promise<RTCStatsReport>;
  getStats(selector: MediaStreamTrack, // nullable
           successCallback: RTCStatsCallback,
           failureCallback: RTCPeerConnectionErrorCallback): void;
}
declare var RTCPeerConnection: {
  prototype: RTCPeerConnection;
  new (configuration: RTCConfiguration,
       constraints?: RTCMediaConstraints): RTCPeerConnection;
};

interface RTCIceCandidate {
  candidate: string;
  sdpMid?: string;
  sdpMLineIndex?: number;
}
declare var RTCIceCandidate: {
  prototype: RTCIceCandidate;
  new (candidateInitDict?: RTCIceCandidate): RTCIceCandidate;
};

interface webkitRTCIceCandidate extends RTCIceCandidate {
  candidate: string;
  sdpMid?: string;
  sdpMLineIndex?: number;
}
declare var webkitRTCIceCandidate: {
  prototype: webkitRTCIceCandidate;
  new (candidateInitDict?: webkitRTCIceCandidate): webkitRTCIceCandidate;
};

interface mozRTCIceCandidate extends RTCIceCandidate {
  candidate: string;
  sdpMid?: string;
  sdpMLineIndex?: number;
}
declare var mozRTCIceCandidate: {
  prototype: mozRTCIceCandidate;
  new (candidateInitDict?: mozRTCIceCandidate): mozRTCIceCandidate;
};

interface RTCIceCandidateInit {
  candidate: string;
  sdpMid?: string;
  sdpMLineIndex?: number;
}
declare var RTCIceCandidateInit:{
  prototype: RTCIceCandidateInit;
  new (): RTCIceCandidateInit;
};

interface PeerConnectionIceEvent {
  peer: RTCPeerConnection;
  candidate: RTCIceCandidate;
}
declare var PeerConnectionIceEvent: {
  prototype: PeerConnectionIceEvent;
  new (): PeerConnectionIceEvent;
};

interface RTCPeerConnectionConfig {
  iceServers: RTCIceServer[];
}
declare var RTCPeerConnectionConfig: {
  prototype: RTCPeerConnectionConfig;
  new (): RTCPeerConnectionConfig;
};

interface Window{
  RTCPeerConnection: RTCPeerConnection;
  webkitRTCPeerConnection: webkitRTCPeerConnection;
  mozRTCPeerConnection: mozRTCPeerConnection;
  RTCSessionDescription: RTCSessionDescription;
  webkitRTCSessionDescription: webkitRTCSessionDescription;
  mozRTCSessionDescription: mozRTCSessionDescription;
  RTCIceCandidate: RTCIceCandidate;
  webkitRTCIceCandidate: webkitRTCIceCandidate;
  mozRTCIceCandidate: mozRTCIceCandidate;
}
