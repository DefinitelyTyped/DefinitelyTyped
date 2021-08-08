declare const EPublishedFileInappropriateResult: {
	"NotScanned": 0,
	"VeryUnlikely": 1,
	"Unlikely": 30,
	"Possible": 50,
	"Likely": 75,
	"VeryLikely": 100,

	// Value-to-name mapping for convenience
	"0": "NotScanned",
	"1": "VeryUnlikely",
	"30": "Unlikely",
	"50": "Possible",
	"75": "Likely",
	"100": "VeryLikely",
};

export = EPublishedFileInappropriateResult;
