declare const EChatRoomGroupAction: {
	"Default": 0,
	"CreateRenameDeleteChannel": 1,
	"Kick": 2,
	"Ban": 3,
	"Invite": 4,
	"ChangeTaglineAvatarName": 5,
	"Chat": 6,
	"ViewHistory": 7,
	"ChangeGroupRoles": 8,
	"ChangeUserRoles": 9,
	"MentionAll": 10,
	"SetWatchingBroadcast": 11,

	// Value-to-name mapping for convenience
	"0": "Default",
	"1": "CreateRenameDeleteChannel",
	"2": "Kick",
	"3": "Ban",
	"4": "Invite",
	"5": "ChangeTaglineAvatarName",
	"6": "Chat",
	"7": "ViewHistory",
	"8": "ChangeGroupRoles",
	"9": "ChangeUserRoles",
	"10": "MentionAll",
	"11": "SetWatchingBroadcast",
};

export = EChatRoomGroupAction;
