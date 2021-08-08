declare const EChatRoomGroupPermissions: {
	"Default": 0,
	"Valid": 1,
	"CanInvite": 2,
	"CanKick": 4,
	"CanBan": 8,
	"CanAdminChannel": 16,

	// Value-to-name mapping for convenience
	"0": "Default",
	"1": "Valid",
	"2": "CanInvite",
	"4": "CanKick",
	"8": "CanBan",
	"16": "CanAdminChannel",
};

export = EChatRoomGroupPermissions;
