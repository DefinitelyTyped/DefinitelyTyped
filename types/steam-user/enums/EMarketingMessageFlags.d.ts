declare const EMarketingMessageFlags: {
	"None": 0,
	"HighPriority": 1,
	"PlatformWindows": 2,
	"PlatformMac": 4,
	"PlatformLinux": 8,
	"PlatformRestrictions": 2 | 4 | 8,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "HighPriority",
	"2": "PlatformWindows",
	"4": "PlatformMac",
	"8": "PlatformLinux",
};

// module.exports.PlatformRestrictions = module.exports.PlatformWindows | module.exports.PlatformMac | module.exports.PlatformLinux;

export = EMarketingMessageFlags;
