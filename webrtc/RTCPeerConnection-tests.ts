/// <reference path="MediaStream.d.ts" />
/// <reference path="RTCPeerConnection.d.ts" />

var config: RTCConfiguration =
    { iceServers: [{ url: "stun.l.google.com:19302" }] };
var constraints: RTCMediaConstraints =
    { mandatory: { OfferToReceiveAudio: true, OfferToReceiveVideo: true } };

var peerConnection: RTCPeerConnection =
    new RTCPeerConnection(config, constraints);

navigator.getUserMedia({ audio: true, video: true },
  stream => {
    peerConnection.addStream(stream);
  },
  error => {
    console.log('Error message: ' + error.message);
    console.log('Error name: ' + error.name);
  });

peerConnection.onaddstream = ev => console.log(ev.type);
peerConnection.ondatachannel = ev => console.log(ev.type);
peerConnection.oniceconnectionstatechange = ev => console.log(ev.type);
peerConnection.onnegotiationneeded = ev => console.log(ev.type);
peerConnection.onopen = ev => console.log(ev.type);
peerConnection.onicecandidate = ev => console.log(ev.type);
peerConnection.onremovestream = ev => console.log(ev.type);
peerConnection.onstatechange = ev => console.log(ev.type);

peerConnection.createOffer(
  offer => {
    peerConnection.setLocalDescription(offer,
      () => console.log("set local description"),
      error => console.log("Error setting local description: " + error));
  },
  error => console.log("Error creating offer: " + error));

var type: string = RTCSdpType[RTCSdpType.offer];
var offer: RTCSessionDescriptionInit = { type: type, sdp: "some sdp" };
var sessionDescription = new RTCSessionDescription(offer);

peerConnection.setRemoteDescription(sessionDescription, () => {
  peerConnection.createAnswer(
    answer => {
      peerConnection.setLocalDescription(answer,
        () => console.log('Set local description'),
      error => console.log(
          "Error setting local description from created answer: " + error +
          "; answer.sdp=" + answer.sdp));
    },
  error => console.log("Error creating answer: " + error));
},
error => console.log('Error setting remote description: ' + error +
    "; offer.sdp=" + offer.sdp));

var webkitSessionDescription = new webkitRTCSessionDescription(offer);

peerConnection.setRemoteDescription(webkitSessionDescription, () => {
  peerConnection.createAnswer(
    answer => {
      peerConnection.setLocalDescription(answer,
        () => console.log('Set local description'),
      error => console.log(
         "Error setting local description from created answer: " + error +
         "; answer.sdp=" + answer.sdp));
    },
  error => console.log("Error creating answer: " + error));
},
error => console.log('Error setting remote description: ' + error +
    "; offer.sdp=" + offer.sdp));

var mozSessionDescription = new mozRTCSessionDescription(offer);

peerConnection.setRemoteDescription(mozSessionDescription, () => {
  peerConnection.createAnswer(
    answer => {
      peerConnection.setLocalDescription(answer,
        () => console.log('Set local description'),
      error => console.log(
         "Error setting local description from created answer: " + error +
         "; answer.sdp=" + answer.sdp));
    },
  error => console.log("Error creating answer: " + error));
},
error => console.log('Error setting remote description: ' + error +
    "; offer.sdp=" + offer.sdp));

var wkPeerConnection: webkitRTCPeerConnection =
    new webkitRTCPeerConnection(config, constraints);

