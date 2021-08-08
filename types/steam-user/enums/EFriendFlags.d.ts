declare const EFriendFlags: {
	"None": 0,
	"Blocked": 1,
	"FriendshipRequested": 2,
	"Immediate": 4,
	"ClanMember": 8,
	"OnGameServer": 16,
	"RequestingFriendship": 128,
	"RequestingInfo": 256,
	"Ignored": 512,
	"IgnoredFriend": 1024,
	"Suggested": 2048,
	"ChatMember": 4096,
	"FlagAll": 65535,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "Blocked",
	"2": "FriendshipRequested",
	"4": "Immediate",
	"8": "ClanMember",
	"16": "OnGameServer",
	"128": "RequestingFriendship",
	"256": "RequestingInfo",
	"512": "Ignored",
	"1024": "IgnoredFriend",
	"2048": "Suggested",
	"4096": "ChatMember",
	"65535": "FlagAll",
};

export = EFriendFlags;
