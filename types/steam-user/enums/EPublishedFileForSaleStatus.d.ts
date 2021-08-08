declare const EPublishedFileForSaleStatus: {
	"NotForSale": 0,
	"PendingApproval": 1,
	"ApprovedForSale": 2,
	"RejectedForSale": 3,
	"NoLongerForSale": 4,
	"TentativeApproval": 5,

	// Value-to-name mapping for convenience
	"0": "NotForSale",
	"1": "PendingApproval",
	"2": "ApprovedForSale",
	"3": "RejectedForSale",
	"4": "NoLongerForSale",
	"5": "TentativeApproval",
};

export = EPublishedFileForSaleStatus;
