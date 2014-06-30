// Type definitions for WebRTC
// Project: http://dev.w3.org/2011/webrtc/
// Definitions by: Ken Smith <https://github.com/smithkl42/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//
// Definitions taken from http://dev.w3.org/2011/webrtc/editor/webrtc.html
//
// For example code see:
//   https://code.google.com/p/webrtc/source/browse/stable/samples/js/apprtc/js/main.js
//
// For a generic implementation see that deals with browser differences, see:
//   https://code.google.com/p/webrtc/source/browse/stable/samples/js/base/adapter.js

/// <reference path="MediaStream.d.ts" />

// TODO(1): Get Typescript to have string-enum types as WebRtc is full of string
// enums.
// https://typescript.codeplex.com/discussions/549207

// TODO(2): get Typescript to have union types as WebRtc uses them.
// https://typescript.codeplex.com/workitem/1364

// TODO(3): Typescript type-abbreviations fail to be structural.
// https://typescript.codeplex.com/workitem/2587

interface RTCConfiguration {
	iceServers: RTCIceServer[];
}
declare var RTCConfiguration: {
	prototype: RTCConfiguration;
	new (): RTCConfiguration;
}

interface RTCIceServer {
	url: string;
	credential?: string;
}
declare var RTCIceServer: {
	prototype: RTCIceServer;
	new (): RTCIceServer;
}

// moz (Firefox) specific prefixes.
interface mozRTCPeerConnection extends RTCPeerConnection {
}
declare var mozRTCPeerConnection: {
	prototype: mozRTCPeerConnection;
	new (settings: RTCPeerConnectionConfig, constraints?:MediaConstraints): mozRTCPeerConnection;
}
// webkit (Chrome) specific prefixes.
interface webkitRTCPeerConnection extends RTCPeerConnection {
}
declare var webkitRTCPeerConnection: {
	prototype: webkitRTCPeerConnection;
	new (settings: RTCPeerConnectionConfig, constraints?:MediaConstraints): webkitRTCPeerConnection;
}

// For Chrome, look at the code here: https://code.google.com/p/chromium/codesearch#chromium/src/third_party/libjingle/source/talk/app/webrtc/webrtcsession.cc&sq=package:chromium&dr=C&l=63
interface OptionalMediaConstraint {
	// When true, will use DTLS/SCTP data channels
	DtlsSrtpKeyAgreement?: boolean;
	// When true will use Rtp-based data channels (depreicated)
	RtpDataChannels?: boolean;
}

// ks 12/20/12 - There's more here that doesn't seem to be documented very well yet.
// http://www.w3.org/TR/2013/WD-webrtc-20130910/
interface MediaConstraints {
	mandatory?: MediaOfferConstraints;
	optional?: OptionalMediaConstraint[]
}

interface MediaOfferConstraints {
	OfferToReceiveAudio: boolean;
	OfferToReceiveVideo: boolean;
}

interface RTCSessionDescription {
	type?: string;  // RTCSdpType; See TODO(3)
	sdp?: string;
}
declare var RTCSessionDescription: {
	prototype: RTCSessionDescription;
	new (descriptionInitDict?: RTCSessionDescriptionInit): RTCSessionDescription;
}

interface RTCSessionDescriptionInit {
	type: string;  // RTCSdpType; See TODO(3)
	sdp: string;
}
declare var RTCSessionDescriptionInit: {
	prototype: RTCSessionDescriptionInit;
	new (): RTCSessionDescriptionInit;
}

interface RTCDataChannelInit {
	ordered             ?: boolean; // messages must be sent in-order.
  maxPacketLifeTime   ?: number;  // unsigned short
  maxRetransmits      ?: number;  // unsigned short
  protocol            ?: string;  // default = ''
  negotiated          ?: boolean; // default = false;
  id                  ?: number;  // unsigned short
}

interface RTCSdpType {
	// http://dev.w3.org/2011/webrtc/editor/webrtc.html#rtcsdptype
	// enum RTCSdpType {
	//     "offer",
	//     "pranswer",
	//     "answer"
	// };
	string;
}

interface RTCMessageEvent {
	// http://dev.w3.org/2011/webrtc/editor/webrtc.html#event-datachannel-message
	// At present, this can be an: ArrayBuffer, a string, or a Blob.
	// See TODO(2)
	data: any;
}

interface RTCDataChannelState {
	// http://dev.w3.org/2011/webrtc/editor/webrtc.html#idl-def-RTCDataChannelState
	// enum RTCDataChannelState {
	//     "connecting",
	//     "open",
	//     "closing",
	//     "closed"
	// };
	string;
}

interface RTCDataChannel extends EventTarget {
	label: string;
	reliable: boolean;
	readyState: string; // RTCDataChannelState; see TODO(3)
	bufferedAmount: number;
	onopen: (event: Event) => void;
	onerror: (event: Event) => void;
	onclose: (event: Event) => void;
	close(): void;
	onmessage: (event: RTCMessageEvent) => void;
	binaryType: string;
	send(data: string);
	send(data: ArrayBuffer);
	send(data: ArrayBufferView);
	send(data: Blob);
}
declare var RTCDataChannel: {
	prototype: RTCDataChannel;
	new (): RTCDataChannel;
}

interface RTCDataChannelEvent extends Event {
	constructor (eventInitDict: RTCDataChannelEventInit);
	channel: RTCDataChannel;
}
declare var RTCDataChannelEvent: {
	prototype: RTCDataChannelEvent;
	new (eventInitDict: RTCDataChannelEventInit);
}

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

interface RTCIceGatheringState {
	// http://dev.w3.org/2011/webrtc/editor/webrtc.html#rtcicegatheringstate-enum
	// enum RTCIceGatheringState {
	//     "new",
	//     "gathering",
	//     "complete"
	// };
	string;
}

interface RTCIceConnectionState {
	// http://dev.w3.org/2011/webrtc/editor/webrtc.html#idl-def-RTCIceConnectionState
	// enum RTCIceConnectionState {
	//     "new",
	//     "checking",
	//     "connected",
	//     "completed",
	//     "failed",
	//     "disconnected",
	//     "closed"
	// };
	string;
}

interface RTCSignalingState {
	// http://dev.w3.org/2011/webrtc/editor/webrtc.html#idl-def-RTCSignalingState
	// enum RTCSignalingState {
	//     "stable",
	//     "have-local-offer",
	//     "have-remote-offer",
	//     "have-local-pranswer",
	//     "have-remote-pranswer",
	//     "closed"
	// };
	string;
}

interface RTCPeerConnection {
	createOffer(successCallback: RTCSessionDescriptionCallback, failureCallback?: RTCPeerConnectionErrorCallback, constraints?: MediaConstraints): void;
	createAnswer(successCallback: RTCSessionDescriptionCallback, failureCallback?: RTCPeerConnectionErrorCallback, constraints?: MediaConstraints): void;
	setLocalDescription(description: RTCSessionDescription, successCallback?: RTCVoidCallback, failureCallback?: RTCPeerConnectionErrorCallback): void;
	localDescription: RTCSessionDescription;
	setRemoteDescription(description: RTCSessionDescription, successCallback?: RTCVoidCallback, failureCallback?: RTCPeerConnectionErrorCallback): void;
	remoteDescription: RTCSessionDescription;
	signalingState: string; // RTCSignalingState; see TODO(3)
	updateIce(configuration?: RTCConfiguration, constraints?: MediaConstraints): void;
	addIceCandidate(candidate: RTCIceCandidate): void;
	iceGatheringState: string;  // RTCIceGatheringState; see TODO(3)
	iceConnectionState: string;  // RTCIceConnectionState; see TODO(3)
	getLocalStreams(): MediaStream[];
	getRemoteStreams(): MediaStream[];
	createDataChannel(label?: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
	ondatachannel: (event: Event) => void;
	addStream(stream: MediaStream, constraints?: MediaConstraints): void;
	removeStream(stream: MediaStream): void;
	close(): void;
	onnegotiationneeded: (event: Event) => void;
	onconnecting: (event: Event) => void;
	onopen: (event: Event) => void;
	onaddstream: (event: RTCMediaStreamEvent) => void;
	onremovestream: (event: RTCMediaStreamEvent) => void;
	onstatechange: (event: Event) => void;
	onicechange: (event: Event) => void;
	onicecandidate: (event: RTCIceCandidateEvent) => void;
	onidentityresult: (event: Event) => void;
	onsignalingstatechange: (event: Event) => void;
}
declare var RTCPeerConnection: {
	prototype: RTCPeerConnection;
	new (configuration: RTCConfiguration, constraints?: MediaConstraints): RTCPeerConnection;
}

interface RTCIceCandidate {
	candidate?: string;
	sdpMid?: string;
	sdpMLineIndex?: number;
}
declare var RTCIceCandidate: {
	prototype: RTCIceCandidate;
	new (candidateInitDict?: RTCIceCandidate);
}

interface RTCIceCandidateInit {
	candidate: string;
	sdpMid: string;
	sdpMLineIndex: number;
}
declare var RTCIceCandidateInit:{
	prototype: RTCIceCandidateInit;
	new (): RTCIceCandidateInit;
}

interface PeerConnectionIceEvent {
	peer: RTCPeerConnection;
	candidate: RTCIceCandidate;
}
declare var PeerConnectionIceEvent: {
	prototype: PeerConnectionIceEvent;
	new (): PeerConnectionIceEvent;
}

interface RTCPeerConnectionConfig {
	iceServers: RTCIceServer[];
}
declare var RTCPeerConnectionConfig: {
	prototype: RTCPeerConnectionConfig;
	new (): RTCPeerConnectionConfig;
}
