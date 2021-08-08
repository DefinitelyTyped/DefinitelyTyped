declare const ELicenseFlags: {
	"None": 0,
	"Renew": 1,
	"RenewalFailed": 2,
	"Pending": 4,
	"Expired": 8,
	"CancelledByUser": 16,
	"CancelledByAdmin": 32,
	"LowViolenceContent": 64,
	"ImportedFromSteam2": 128,
	"ForceRunRestriction": 256,
	"RegionRestrictionExpired": 512,
	"CancelledByFriendlyFraudLock": 1024,
	"NotActivated": 2048,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "Renew",
	"2": "RenewalFailed",
	"4": "Pending",
	"8": "Expired",
	"16": "CancelledByUser",
	"32": "CancelledByAdmin",
	"64": "LowViolenceContent",
	"128": "ImportedFromSteam2",
	"256": "ForceRunRestriction",
	"512": "RegionRestrictionExpired",
	"1024": "CancelledByFriendlyFraudLock",
	"2048": "NotActivated",
};

export = ELicenseFlags;
