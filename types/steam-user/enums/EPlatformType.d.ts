declare const EPlatformType: {
	"Unknown": 0,
	"Win32": 1,
	"Win64": 2,
	"Linux": 3, // removed "split to Linux64 and Linux32"
	"Linux64": 3,
	"OSX": 4,
	"PS3": 5,
	"Linux32": 6,

	// Value-to-name mapping for convenience
	"0": "Unknown",
	"1": "Win32",
	"2": "Win64",
	"3": "Linux64",
	"4": "OSX",
	"5": "PS3",
	"6": "Linux32",
};

export = EPlatformType;
