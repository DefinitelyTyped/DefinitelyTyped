declare const EChatPermission: {
	"Close": 1,
	"Invite": 2,
	"Talk": 8,
	"Kick": 16,
	"Mute": 32,
	"SetMetadata": 64,
	"ChangePermissions": 128,
	"Ban": 256,
	"ChangeAccess": 512,
	"Mask": 1019,
	"EveryoneNotInClanDefault": 8,
	"EveryoneDefault": 8 | 2,
	"MemberDefault": 256 | 16 | 8 | 2,
	"OfficerDefault": 256 | 16 | 8 | 2,
	"OwnerDefault": 512 | 256 | 64 | 32 | 16 | 8 | 2 | 1,

	// Value-to-name mapping for convenience
	"1": "Close",
	"2": "Invite",
	"8": "Talk",
	"16": "Kick",
	"32": "Mute",
	"64": "SetMetadata",
	"128": "ChangePermissions",
	"256": "Ban",
	"512": "ChangeAccess",
	"1019": "Mask",
};

export = EChatPermission;
