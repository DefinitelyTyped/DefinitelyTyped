declare const EStreamFrameResult: {
	"Pending": 0,
	"Displayed": 1,
	"DroppedNetworkSlow": 2,
	"DroppedNetworkLost": 3,
	"DroppedDecodeSlow": 4,
	"DroppedDecodeCorrupt": 5,
	"DroppedLate": 6,
	"DroppedReset": 7,

	// Value-to-name mapping for convenience
	"0": "Pending",
	"1": "Displayed",
	"2": "DroppedNetworkSlow",
	"3": "DroppedNetworkLost",
	"4": "DroppedDecodeSlow",
	"5": "DroppedDecodeCorrupt",
	"6": "DroppedLate",
	"7": "DroppedReset",
};

export = EStreamFrameResult;
