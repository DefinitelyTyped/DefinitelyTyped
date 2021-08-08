declare const ELicenseType: {
	"NoLicense": 0,
	"SinglePurchase": 1,
	"SinglePurchaseLimitedUse": 2,
	"RecurringCharge": 3,
	"RecurringChargeLimitedUse": 4,
	"RecurringChargeLimitedUseWithOverages": 5,
	"RecurringOption": 6,
	"LimitedUseDelayedActivation": 7,

	// Value-to-name mapping for convenience
	"0": "NoLicense",
	"1": "SinglePurchase",
	"2": "SinglePurchaseLimitedUse",
	"3": "RecurringCharge",
	"4": "RecurringChargeLimitedUse",
	"5": "RecurringChargeLimitedUseWithOverages",
	"6": "RecurringOption",
	"7": "LimitedUseDelayedActivation",
};

export = ELicenseType;
