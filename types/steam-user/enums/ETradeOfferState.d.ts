declare const ETradeOfferState: {
	"Invalid": 1,
	"Active": 2,
	"Accepted": 3,
	"Countered": 4,
	"Expired": 5,
	"Canceled": 6,
	"Declined": 7,
	"InvalidItems": 8,
	"CreatedNeedsConfirmation": 9,
	"CanceledBySecondFactor": 10,
	"InEscrow": 11,

	// Value-to-name mapping for convenience
	"1": "Invalid",
	"2": "Active",
	"3": "Accepted",
	"4": "Countered",
	"5": "Expired",
	"6": "Canceled",
	"7": "Declined",
	"8": "InvalidItems",
	"9": "CreatedNeedsConfirmation",
	"10": "CanceledBySecondFactor",
	"11": "InEscrow",
};

export = ETradeOfferState;
