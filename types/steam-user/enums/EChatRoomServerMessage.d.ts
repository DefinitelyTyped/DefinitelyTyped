declare const EChatRoomServerMessage: {
	"Invalid": 0,
	"RenameChatRoom": 1,
	"Joined": 2,
	"Parted": 3,
	"Kicked": 4,
	"Invited": 5,
	"InviteDismissed": 8,
	"ChatRoomTaglineChanged": 9,
	"ChatRoomAvatarChanged": 10,
	"AppCustom": 11,

	// Value-to-name mapping for convenience
	"0": "Invalid",
	"1": "RenameChatRoom",
	"2": "Joined",
	"3": "Parted",
	"4": "Kicked",
	"5": "Invited",
	"8": "InviteDismissed",
	"9": "ChatRoomTaglineChanged",
	"10": "ChatRoomAvatarChanged",
	"11": "AppCustom",
};

export = EChatRoomServerMessage;
