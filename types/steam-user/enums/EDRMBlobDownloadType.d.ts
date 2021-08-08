declare const EDRMBlobDownloadType: {
	"Error": 0,
	"File": 1,
	"Parts": 2,
	"Compressed": 4,
	"AllMask": 7,
	"IsJob": 8,
	"HighPriority": 16,
	"AddTimestamp": 32,
	"LowPriority": 64,

	// Value-to-name mapping for convenience
	"0": "Error",
	"1": "File",
	"2": "Parts",
	"4": "Compressed",
	"7": "AllMask",
	"8": "IsJob",
	"16": "HighPriority",
	"32": "AddTimestamp",
	"64": "LowPriority",
};

export = EDRMBlobDownloadType;
