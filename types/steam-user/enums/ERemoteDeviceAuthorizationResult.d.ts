declare const ERemoteDeviceAuthorizationResult: {
	"Success": 0,
	"Denied": 1,
	"NotLoggedIn": 2,
	"Offline": 3,
	"Busy": 4,
	"InProgress": 5,
	"TimedOut": 6,
	"Failed": 7,
	"Canceled": 8,

	// Value-to-name mapping for convenience
	"0": "Success",
	"1": "Denied",
	"2": "NotLoggedIn",
	"3": "Offline",
	"4": "Busy",
	"5": "InProgress",
	"6": "TimedOut",
	"7": "Failed",
	"8": "Canceled",
};

export = ERemoteDeviceAuthorizationResult;
