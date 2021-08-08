declare const EDepotFileFlag: {
	"UserConfig": 1,
	"VersionedUserConfig": 2,
	"Encrypted": 4,
	"ReadOnly": 8,
	"Hidden": 16,
	"Executable": 32,
	"Directory": 64,
	"CustomExecutable": 128,
	"InstallScript": 256,
	"Symlink": 512,

	// Value-to-name mapping for convenience
	"1": "UserConfig",
	"2": "VersionedUserConfig",
	"4": "Encrypted",
	"8": "ReadOnly",
	"16": "Hidden",
	"32": "Executable",
	"64": "Directory",
	"128": "CustomExecutable",
	"256": "InstallScript",
	"512": "Symlink",
};

export = EDepotFileFlag;
