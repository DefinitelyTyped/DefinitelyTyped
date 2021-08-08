declare const EServerFlags: {
	"None": 0,
	"Active": 1,
	"Secure": 2,
	"Dedicated": 4,
	"Linux": 8,
	"Passworded": 16,
	"Private": 32,

	// Value-to-name mapping for convenience
	"0": "None",
	"1": "Active",
	"2": "Secure",
	"4": "Dedicated",
	"8": "Linux",
	"16": "Passworded",
	"32": "Private",
};

export = EServerFlags;
