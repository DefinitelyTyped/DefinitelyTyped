declare const EClanRelationship: {
	"None": 0,
	"Blocked": 1,
	"Invited": 2,
	"Member": 3,
	"Kicked": 4,
	"KickAcknowledged": 5,
	"PendingApproval": 6,
	"RequestDenied": 7,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "Blocked",
	"2": "Invited",
	"3": "Member",
	"4": "Kicked",
	"5": "KickAcknowledged",
	"6": "PendingApproval",
	"7": "RequestDenied",
};

export = EClanRelationship;
