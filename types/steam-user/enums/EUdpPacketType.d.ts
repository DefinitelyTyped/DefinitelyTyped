declare const EUdpPacketType: {
	"Invalid": 0,
	"ChallengeReq": 1,
	"Challenge": 2,
	"Connect": 3,
	"Accept": 4,
	"Disconnect": 5,
	"Data": 6,
	"Datagram": 7,
	"Max": 8,

	// Value-to-name mapping for convenience
	"0": "Invalid",
	"1": "ChallengeReq",
	"2": "Challenge",
	"3": "Connect",
	"4": "Accept",
	"5": "Disconnect",
	"6": "Data",
	"7": "Datagram",
	"8": "Max",
};

export = EUdpPacketType;
