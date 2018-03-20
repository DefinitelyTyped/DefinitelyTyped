import * as kurentoUtils from 'kurento-utils';

() => {
    const peer = kurentoUtils.WebRtcPeer.WebRtcPeerSendrecv({}, error => {});
    peer.showLocalVideo();
    peer.getLocalStream().getAudioTracks();
    peer.generateOffer((error, sdp) => {});
    peer.on('icecandidate', (candidate: any) => {
        peer.addIceCandidate(candidate, error => {});
    });
    peer.getRemoteStream().getAudioTracks();
    peer.processAnswer('answer', error => {});
    peer.processOffer('offer', (error, {}) => {});
    const rtcPeerConnection = peer.peerConnection;
    peer.dispose();
};
