declare const EChatRoomMemberStateChange: {
	"Invalid": 0,
	"Joined": 1,
	"Parted": 2,
	"Kicked": 3,
	"Invited": 4,
	"RankChanged": 7,
	"InviteDismissed": 8,
	"Muted": 9,
	"Banned": 10,
	"RolesChanged": 12,

	// Value-to-name mapping for convenience
	"0": "Invalid",
	"1": "Joined",
	"2": "Parted",
	"3": "Kicked",
	"4": "Invited",
	"7": "RankChanged",
	"8": "InviteDismissed",
	"9": "Muted",
	"10": "Banned",
	"12": "RolesChanged",
};

export = EChatRoomMemberStateChange;
