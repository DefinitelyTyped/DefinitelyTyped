declare const EChatRoomGroupRank: {
	"Default": 0,
	"Viewer": 10,
	"Guest": 15,
	"Member": 20,
	"Moderator": 30,
	"Officer": 40,
	"Owner": 50,
	"TestInvalid": 99,

	// Value-to-name mapping for convenience
	"0": "Default",
	"10": "Viewer",
	"15": "Guest",
	"20": "Member",
	"30": "Moderator",
	"40": "Officer",
	"50": "Owner",
	"99": "TestInvalid",
};

export = EChatRoomGroupRank;
