declare const EChatFlags: {
	"Locked": 1,
	"InvisibleToFriends": 2,
	"Moderated": 4,
	"Unjoinable": 8,

	// Value-to-name mapping for convenience
	"1": "Locked",
	"2": "InvisibleToFriends",
	"4": "Moderated",
	"8": "Unjoinable",
};

export = EChatFlags;
