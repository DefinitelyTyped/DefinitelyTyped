declare const EAppUsageEvent: {
	"GameLaunch": 1,
	"GameLaunchTrial": 2,
	"Media": 3,
	"PreloadStart": 4,
	"PreloadFinish": 5,
	"MarketingMessageView": 6,
	"InGameAdViewed": 7,
	"GameLaunchFreeWeekend": 8,

	// Value-to-name mapping for convenience
	"1": "GameLaunch",
	"2": "GameLaunchTrial",
	"3": "Media",
	"4": "PreloadStart",
	"5": "PreloadFinish",
	"6": "MarketingMessageView",
	"7": "InGameAdViewed",
	"8": "GameLaunchFreeWeekend",
};

export = EAppUsageEvent;
