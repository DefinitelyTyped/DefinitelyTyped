declare const EChatEntryType: {
	"Invalid": 0,
	"ChatMsg": 1,
	"Typing": 2,
	"InviteGame": 3,
	"Emote": 4, // removed "No longer supported by clients"
	"LobbyGameStart": 5, // removed "Listen for LobbyGameCreated_t callback instead"
	"LeftConversation": 6,
	"Entered": 7,
	"WasKicked": 8,
	"WasBanned": 9,
	"Disconnected": 10,
	"HistoricalChat": 11,
	"Reserved1": 12,
	"Reserved2": 13,
	"LinkBlocked": 14,

	// Value-to-name mapping for convenience
	"0": "Invalid",
	"1": "ChatMsg",
	"2": "Typing",
	"3": "InviteGame",
	"4": "Emote",
	"5": "LobbyGameStart",
	"6": "LeftConversation",
	"7": "Entered",
	"8": "WasKicked",
	"9": "WasBanned",
	"10": "Disconnected",
	"11": "HistoricalChat",
	"12": "Reserved1",
	"13": "Reserved2",
	"14": "LinkBlocked",
};

export = EChatEntryType;
