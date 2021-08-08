declare const EChatMemberStateChange: {
	"Entered": 1,
	"Left": 2,
	"Disconnected": 4,
	"Kicked": 8,
	"Banned": 16,
	"VoiceSpeaking": 4096,
	"VoiceDoneSpeaking": 8192,

	// Value-to-name mapping for convenience
	"1": "Entered",
	"2": "Left",
	"4": "Disconnected",
	"8": "Kicked",
	"16": "Banned",
	"4096": "VoiceSpeaking",
	"8192": "VoiceDoneSpeaking",
};

export = EChatMemberStateChange;
