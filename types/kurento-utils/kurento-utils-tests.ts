import * as kurentoUtils from 'kurento-utils';

() => {
    const peer = kurentoUtils.WebRtcPeer.WebRtcPeerSendrecv({}, error => {});
    peer.showLocalVideo();
    peer.getLocalStream().getAudioTracks();
    peer.getRemoteStream().getAudioTracks();
    peer.processAnswer({}, error => {});
    peer.processOffer({}, (error, {}) => {});
    const rtcPeerConnection = peer.peerConnection;
    peer.dispose();
};
