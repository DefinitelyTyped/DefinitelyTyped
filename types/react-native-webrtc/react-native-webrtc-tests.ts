import * as WebRTC from "react-native-webrtc";

const { mediaDevices, RTCSessionDescription } = WebRTC;

mediaDevices.getUserMedia({
    audio: true,
    video: {
        mandatory: {
            minWidth: 500,
            minHeight: 300,
            minFrameRate: 30
        },
        facingMode: "user",
        optional: [{ sourceId: "" }]
    }
});

mediaDevices.enumerateDevices();

new RTCSessionDescription({ sdp: "", type: "" });

new RTCIceCandidate({ candidate: "", sdpMLineIndex: 0, sdpMid: "" });

new RTCPeerConnection({
    iceServers: [
        { urls: ["stun:coturn.workserver.xyz:5349"] },

        {
            username: "carlos",
            credential: "carlos90",
            urls: [
                "turn:coturn.workserver.xyz:3478?transport=udp",
                "turn:coturn.workserver.xyz:3478?transport=tcp"
            ]
        }
    ],
    iceTransportPolicy: "all"
});
