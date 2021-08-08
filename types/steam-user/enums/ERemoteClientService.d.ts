declare const ERemoteClientService: {
	"None": 0,
	"RemoteControl": 1,
	"GameStreaming": 2,
	"SiteLicense": 4,
	"ContentCache": 8,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "RemoteControl",
	"2": "GameStreaming",
	"4": "SiteLicense",
	"8": "ContentCache",
};

export = ERemoteClientService;
