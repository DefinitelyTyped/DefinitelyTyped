declare const EMsgClanAccountFlags: {
	"k_EMsgClanAccountFlagPublic": 1,
	"k_EMsgClanAccountFlagLarge": 2,
	"k_EMsgClanAccountFlagLocked": 4,
	"k_EMsgClanAccountFlagDisabled": 8,
	"k_EMsgClanAccountFlagOGG": 16,

	// Value-to-name mapping for convenience
	"1": "k_EMsgClanAccountFlagPublic",
	"2": "k_EMsgClanAccountFlagLarge",
	"4": "k_EMsgClanAccountFlagLocked",
	"8": "k_EMsgClanAccountFlagDisabled",
	"16": "k_EMsgClanAccountFlagOGG",
};

export = EMsgClanAccountFlags;
