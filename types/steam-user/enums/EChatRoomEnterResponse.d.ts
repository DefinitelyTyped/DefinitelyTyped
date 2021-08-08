declare const EChatRoomEnterResponse: {
	"Success": 1,
	"DoesntExist": 2,
	"NotAllowed": 3,
	"Full": 4,
	"Error": 5,
	"Banned": 6,
	"Limited": 7,
	"ClanDisabled": 8,
	"CommunityBan": 9,
	"MemberBlockedYou": 10,
	"YouBlockedMember": 11,
	"NoRankingDataLobby": 12, // removed
	"NoRankingDataUser": 13, // removed
	"RankOutOfRange": 14, // removed

	// Value-to-name mapping for convenience
	"1": "Success",
	"2": "DoesntExist",
	"3": "NotAllowed",
	"4": "Full",
	"5": "Error",
	"6": "Banned",
	"7": "Limited",
	"8": "ClanDisabled",
	"9": "CommunityBan",
	"10": "MemberBlockedYou",
	"11": "YouBlockedMember",
	"12": "NoRankingDataLobby",
	"13": "NoRankingDataUser",
	"14": "RankOutOfRange",
};

export = EChatRoomEnterResponse;
