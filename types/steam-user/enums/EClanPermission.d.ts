declare const EClanPermission: {
	"Nobody": 0,
	"Owner": 1,
	"Officer": 2,
	"OwnerAndOfficer": 3,
	"Member": 4,
	"Moderator": 8,
	"OGGGameOwner": 16,
	"NonMember": 128,
	"OwnerOfficerModerator": 1 | 2 | 8,
	"AllMembers": 1 | 2 | 8 | 4,

	// Value-to-name mapping for convenience
	"0": "Nobody",
	"1": "Owner",
	"2": "Officer",
	"3": "OwnerAndOfficer",
	"4": "Member",
	"8": "Moderator",
	"16": "OGGGameOwner",
	"128": "NonMember",
};

// module.exports.OwnerOfficerModerator = module.exports.Owner | module.exports.Officer | module.exports.Moderator;
// module.exports.AllMembers = module.exports.Owner | module.exports.Officer | module.exports.Moderator | module.exports.Member;

export = EClanPermission;
