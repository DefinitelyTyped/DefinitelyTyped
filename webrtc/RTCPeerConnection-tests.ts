


let voidpromise: Promise<void>;

var minimalConfig: RTCConfiguration = {};
var config: RTCConfiguration = {
    iceServers: [
        {
            // Single url
            urls: "stun.l.google.com:19302"
        },
        {
            // List of urls and credentials
            urls: ["another-stun.example.com"],
            username: "dude",
            credential: "pass",
            credentialType: "token"
        },
    ],
    iceTransportPolicy: "relay",
    bundlePolicy: "max-compat",
    rtcpMuxPolicy: "negotiate",
    peerIdentity: "dude",
    certificates: [{ expires: 1337 }],
    iceCandidatePoolSize: 5
};
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
peerConnection.ondatachannel = ev => console.log(ev.channel);
peerConnection.oniceconnectionstatechange = ev => console.log(ev.type);
peerConnection.onnegotiationneeded = ev => console.log(ev.type);
peerConnection.onopen = ev => console.log(ev.type);
peerConnection.onicecandidate = ev => console.log(ev.type);
peerConnection.onremovestream = ev => console.log(ev.type);
peerConnection.onstatechange = ev => console.log(ev.type);

peerConnection.createOffer();
let offer2: Promise<RTCSessionDescription> = peerConnection.createOffer({
    voiceActivityDetection: true,
    iceRestart: false
});

var type: string = RTCSdpType[RTCSdpType.offer];
var offer: RTCSessionDescriptionInit = { type: type, sdp: "some sdp" };
var sessionDescription = new RTCSessionDescription(offer);

peerConnection.setRemoteDescription(sessionDescription).then(
    () => peerConnection.createAnswer(),
    error => console.log('Error setting remote description: ' + error + "; offer.sdp=" + offer.sdp)
);

var webkitSessionDescription = new webkitRTCSessionDescription(offer);

// New syntax
voidpromise = peerConnection.setLocalDescription(webkitSessionDescription);

// Legacy syntax
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

peerConnection.setRemoteDescription(mozSessionDescription);

var wkPeerConnection: webkitRTCPeerConnection =
    new webkitRTCPeerConnection(config, constraints);

let candidate: RTCIceCandidate = { 'candidate': 'foobar' };
voidpromise = peerConnection.addIceCandidate(candidate);

var mediaTrackConstraintSet: MediaTrackConstraintSet = {};
var mediaTrackConstraints: MediaTrackConstraints = mediaTrackConstraintSet;

wkPeerConnection.getStats(null);

let mediaStreamTrack: MediaStreamTrack = {
    enabled: true, id:
        'id', kind: 'kind', label: 'label', muted: true, onended: () => { }, onmute: () => { },
    onoverconstrained: () => { }, onunmute: () => { }, readonly: true, readyState: 'string',
    remote: true, applyConstraints: (): Promise<void> => { return new Promise<void>(() => { }) },
    clone: ():MediaStreamTrack => { return this;}, 
    getCapabilities: ():MediaTrackCapabilities => { return {latency:0};},
    getConstraints: ():MediaTrackConstraints => { return {}},
    getSettings: ():MediaTrackSettings => { return { latency: 0}},
    stop: () => {}, addEventListener: () => {}, dispatchEvent: (evt:Event):boolean => { return false;},
    removeEventListener: () => {}
};
wkPeerConnection.getStats(mediaStreamTrack);
