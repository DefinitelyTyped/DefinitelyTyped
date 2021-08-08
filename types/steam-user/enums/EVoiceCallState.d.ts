declare const EVoiceCallState: {
	"None": 0,
	"ScheduledInitiate": 1,
	"RequestedMicAccess": 2,
	"LocalMicOnly": 3,
	"CreatePeerConnection": 4,
	"InitatedWebRTCSession": 5,
	"WebRTCConnectedWaitingOnIceConnected": 6,
	"RequestedPermission": 7,
	"NotifyingVoiceChatOfWebRTCSession": 8,
	"Connected": 9,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "ScheduledInitiate",
	"2": "RequestedMicAccess",
	"3": "LocalMicOnly",
	"4": "CreatePeerConnection",
	"5": "InitatedWebRTCSession",
	"6": "WebRTCConnectedWaitingOnIceConnected",
	"7": "RequestedPermission",
	"8": "NotifyingVoiceChatOfWebRTCSession",
	"9": "Connected",
};

export = EVoiceCallState;
