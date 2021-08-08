declare const ERemoteStoragePlatform: {
	"None": 0,
	"Windows": 1,
	"OSX": 2,
	"PS3": 4,
	"Linux": 8,
	"Switch": 16,
	"Android": 32,
	"IPhoneOS": 64,
	"All": -1,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "Windows",
	"2": "OSX",
	"4": "PS3",
	"8": "Linux",
	"16": "Switch",
	"32": "Android",
	"64": "IPhoneOS",
	"-1": "All",
};

export = ERemoteStoragePlatform;
