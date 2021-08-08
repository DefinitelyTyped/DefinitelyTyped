declare const ESystemIMType: {
	"RawText": 0,
	"InvalidCard": 1,
	"RecurringPurchaseFailed": 2,
	"CardWillExpire": 3,
	"SubscriptionExpired": 4,
	"GuestPassReceived": 5,
	"GuestPassGranted": 6,
	"GiftRevoked": 7,
	"SupportMessage": 8,
	"SupportMessageClearAlert": 9,

	// Value-to-name mapping for convenience
	"0": "RawText",
	"1": "InvalidCard",
	"2": "RecurringPurchaseFailed",
	"3": "CardWillExpire",
	"4": "SubscriptionExpired",
	"5": "GuestPassReceived",
	"6": "GuestPassGranted",
	"7": "GiftRevoked",
	"8": "SupportMessage",
	"9": "SupportMessageClearAlert",
};

export = ESystemIMType;
