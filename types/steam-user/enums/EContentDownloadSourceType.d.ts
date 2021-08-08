declare const EContentDownloadSourceType: {
	"Invalid": 0,
	"CS": 1,
	"CDN": 2,
	"LCS": 3,
	"ProxyCache": 4,
	"LANPeer": 5,
	"SLS": 6,
	"SteamCache": 7,
	"OpenCache": 8,
	"LANCache": 9,

	// Value-to-name mapping for convenience
	"0": "Invalid",
	"1": "CS",
	"2": "CDN",
	"3": "LCS",
	"4": "ProxyCache",
	"5": "LANPeer",
	"6": "SLS",
	"7": "SteamCache",
	"8": "OpenCache",
	"9": "LANCache",
};

export = EContentDownloadSourceType;
