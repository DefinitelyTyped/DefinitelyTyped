declare const ERemoteClientBroadcastMsg: {
	"Discovery": 0,
	"Status": 1,
	"Offline": 2,
	"AuthorizationRequest": 3,
	"AuthorizationResponse": 4,
	"StreamingRequest": 5,
	"StreamingResponse": 6,
	"ProofRequest": 7,
	"ProofResponse": 8,
	"AuthorizationCancelRequest": 9,
	"StreamingCancelRequest": 10,
	"ClientIDDeconflict": 11,
	"StreamTransportSignal": 12,
	"StreamingProgress": 13,

	// Value-to-name mapping for convenience
	"0": "Discovery",
	"1": "Status",
	"2": "Offline",
	"3": "AuthorizationRequest",
	"4": "AuthorizationResponse",
	"5": "StreamingRequest",
	"6": "StreamingResponse",
	"7": "ProofRequest",
	"8": "ProofResponse",
	"9": "AuthorizationCancelRequest",
	"10": "StreamingCancelRequest",
	"11": "ClientIDDeconflict",
	"12": "StreamTransportSignal",
	"13": "StreamingProgress",
};

export = ERemoteClientBroadcastMsg;
