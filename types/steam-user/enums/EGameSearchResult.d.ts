declare const EGameSearchResult: {
	"Invalid": 0,
	"SearchInProgress": 1,
	"SearchFailedNoHosts": 2,
	"SearchGameFound": 3,
	"SearchCompleteAccepted": 4,
	"SearchCompleteDeclined": 5,
	"SearchCanceled": 6,

	// Value-to-name mapping for convenience
	"0": "Invalid",
	"1": "SearchInProgress",
	"2": "SearchFailedNoHosts",
	"3": "SearchGameFound",
	"4": "SearchCompleteAccepted",
	"5": "SearchCompleteDeclined",
	"6": "SearchCanceled",
};

export = EGameSearchResult;
