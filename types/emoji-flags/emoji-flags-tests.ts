import emojiFlags = require("emoji-flags");

emojiFlags.countryCode("US"); // $ExpectTYpe string
emojiFlags.countryCode("US").emoji; // $ExpectTYpe string
emojiFlags.data; // $ExpectType CountryData[]
emojiFlags.DK; // $ExpectType CountryData
emojiFlags.DK.emoji; // $ExpectType string

emojiFlags.emojis; // $ExpectType string[]
emojiFlags.codes; // $ExpectType string[]
emojiFlags.names; // $ExpectType string[]
emojiFlags.unicodes; // $ExpectType string[]
