declare const EStreamStatsMessage: {
	"FrameEvents": 1,
	"DebugDump": 2,
	"LogMessage": 3,
	"LogUploadBegin": 4,
	"LogUploadData": 5,
	"LogUploadComplete": 6,

	// Value-to-name mapping for convenience
	"1": "FrameEvents",
	"2": "DebugDump",
	"3": "LogMessage",
	"4": "LogUploadBegin",
	"5": "LogUploadData",
	"6": "LogUploadComplete",
};

export = EStreamStatsMessage;
