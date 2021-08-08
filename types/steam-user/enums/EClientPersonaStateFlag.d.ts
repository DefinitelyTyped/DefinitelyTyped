declare const EClientPersonaStateFlag: {
	"Status": 1,
	"PlayerName": 2,
	"QueryPort": 4,
	"SourceID": 8,
	"Presence": 16,
	"Metadata": 32, // removed
	"LastSeen": 64,
	"ClanInfo": 128, // obsolete "renamed to UserClanRank"
	"UserClanRank": 128,
	"GameExtraInfo": 256,
	"GameDataBlob": 512,
	"ClanTag": 1024, // obsolete "renamed to ClanData"
	"ClanData": 1024,
	"Facebook": 2048,
	"RichPresence": 4096,
	"Broadcast": 8192,
	"Watching": 16384,

	// Value-to-name mapping for convenience
	"1": "Status",
	"2": "PlayerName",
	"4": "QueryPort",
	"8": "SourceID",
	"16": "Presence",
	"32": "Metadata",
	"64": "LastSeen",
	"128": "UserClanRank",
	"256": "GameExtraInfo",
	"512": "GameDataBlob",
	"1024": "ClanData",
	"2048": "Facebook",
	"4096": "RichPresence",
	"8192": "Broadcast",
	"16384": "Watching",
};

export = EClientPersonaStateFlag;
