

// https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate

type RTCIceCandidateJSON = {
  address: string
  candidate: string
  component: "rtp" | "rtcp"
  foundation: string
  port: number
  priority: number
  protocol: "tcp" | "udp"
  relatedAddress: string | null
  relatedPort: number | null
  sdpMid: string
  sdpMLineIndex: number | null
  tcpType: "tcp" | null
  type: string
  usernameFragment: string
}

interface IRTCIceCandidate extends Readonly<RTCIceCandidateJSON> {
  toJson(): RTCIceCandidateJSON;
}

type RTCIceCandidate = RTCIceCandidateJSON | IRTCIceCandidate;
