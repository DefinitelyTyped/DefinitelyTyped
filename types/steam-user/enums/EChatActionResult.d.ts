declare const EChatActionResult: {
	"Success": 1,
	"Error": 2,
	"NotPermitted": 3,
	"NotAllowedOnClanMember": 4,
	"NotAllowedOnBannedUser": 5,
	"NotAllowedOnChatOwner": 6,
	"NotAllowedOnSelf": 7,
	"ChatDoesntExist": 8,
	"ChatFull": 9,
	"VoiceSlotsFull": 10,

	// Value-to-name mapping for convenience
	"1": "Success",
	"2": "Error",
	"3": "NotPermitted",
	"4": "NotAllowedOnClanMember",
	"5": "NotAllowedOnBannedUser",
	"6": "NotAllowedOnChatOwner",
	"7": "NotAllowedOnSelf",
	"8": "ChatDoesntExist",
	"9": "ChatFull",
	"10": "VoiceSlotsFull",
};

export = EChatActionResult;
