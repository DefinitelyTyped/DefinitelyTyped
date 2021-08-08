declare const EStreamChannel: {
	"Invalid": -1,
	"Discovery": 0,
	"Control": 1,
	"Stats": 2,
	"DataChannelStart": 3,

	// Value-to-name mapping for convenience
	"-1": "Invalid",
	"0": "Discovery",
	"1": "Control",
	"2": "Stats",
	"3": "DataChannelStart",
};

export = EStreamChannel;
