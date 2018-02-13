let defaultIceServers: RTCIceServer[] = window.RTCPeerConnection.defaultIceServers;
if (defaultIceServers.length > 0) {
    const urls = defaultIceServers[0].urls;
}

// Create a peer connection
let ice1: RTCIceServer = {
    urls: 'stun:stun.l.google.com:19302',
    username: 'john',
    credential: '1234',
    credentialType: 'password',
};
let ice2: RTCIceServer = { urls: ['stun:stunserver.org', 'stun:stun.example.com'] };
let pc: RTCPeerConnection = new RTCPeerConnection({});
let pc2: RTCPeerConnection = new RTCPeerConnection({
    iceServers: [ice1, ice2],
});
window.RTCPeerConnection.generateCertificate("sha-256").then((cert: RTCCertificate) => {
    new RTCPeerConnection({
        iceServers: [ice1],
        iceTransportPolicy: 'relay',
        bundlePolicy: 'max-compat',
        rtcpMuxPolicy: 'negotiate',
        peerIdentity: 'dude',
        certificates: [cert],
        iceCandidatePoolSize: 5,
    });
});

// Get/set the configuration
let conf: RTCConfiguration = pc2.getConfiguration();
pc.setConfiguration(conf);

// Close peer connection
pc2.close();

// Offer/answer flow
pc.createOffer({iceRestart: true})
    .then((offer: RTCSessionDescriptionInit) => {
    pc.setLocalDescription(offer);
    pc2.setRemoteDescription(offer);
    pc2.createAnswer().then((answer: RTCSessionDescriptionInit) => {
        pc2.setLocalDescription(answer);
        pc.setRemoteDescription(answer);
    });
});

// Event handlers
pc.onnegotiationneeded = ev => console.log(ev.type);
pc.onicecandidate = ev => console.log(ev.candidate);
pc.onicecandidateerror = ev => console.log(ev.errorText);
pc.onsignalingstatechange = ev => console.log(ev.type);
pc.oniceconnectionstatechange = ev => console.log(ev.type);
pc.onicegatheringstatechange = ev => console.log(ev.type);
pc.onconnectionstatechange = ev => console.log(ev.type);
pc.ontrack = ev => console.log(ev.receiver);
pc.ondatachannel = ev => console.log(ev.channel);

// Legacy interface extensions
pc.createOffer(
    (sdp: RTCSessionDescription) => console.log(sdp.sdp),
    (error: DOMException) => console.log(error.message),
    {iceRestart: true}
).then(() => console.log('createOffer complete'));
pc.setLocalDescription(
    {type: 'offer', sdp: 'foobar'},
    () => console.log('local description set'),
    (error: DOMException) => console.log(error.message)
).then(() => console.log('setLocalDescription complete'));
pc.createAnswer(
    (sdp: RTCSessionDescription) => console.log(sdp.sdp),
    (error: DOMException) => console.log(error.message)
).then(() => console.log('createAnswer complete'));
pc.setRemoteDescription(
    {type: 'answer', sdp: 'foobar'},
    () => console.log('remote description set'),
    (error: DOMException) => console.log(error.message)
).then(() => console.log('setRemoteDescription complete'));
pc.addIceCandidate(
    {candidate: 'candidate', sdpMid: 'foo', sdpMLineIndex: 1},
    () => console.log('candidate added'),
    (error: DOMException) => console.log(error.message)
).then(() => console.log('addIceCandidate complete'));
pc.getStats(
    null,
    (report: RTCStatsReport) => console.log('got report'),
    (error: DOMException) => console.log(error.message)
).then(() => console.log('getStats complete'));
