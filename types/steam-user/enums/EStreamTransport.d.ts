declare const EStreamTransport: {
	"None": 0,
	"UDP": 1,
	"UDPRelay": 2,
	"WebRTC": 3,
	"SDR": 4,
	"UDP_SNS": 5,
	"SNS": 6, // obsolete
	"UDPRelay_SNS": 6,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "UDP",
	"2": "UDPRelay",
	"3": "WebRTC",
	"4": "SDR",
	"5": "UDP_SNS",
	"6": "UDPRelay_SNS",
};

export = EStreamTransport;
