import twemojiParser = require("twemoji-parser");
import { parse, toCodePoints } from "twemoji-parser";

// $ExpectType EmojiEntity[]
twemojiParser.parse("I 🧡 Twemoji! 🥳");
// $ExpectType EmojiEntity[]
const entities = parse("I 🧡 Twemoji! 🥳", {
    assetType: "png",
});
// $ExpectType string[]
twemojiParser.toCodePoints("\uD83D\uDE03");
// $ExpectType string[]
const codePoints = toCodePoints("\uD83D\uDE03");

entities.forEach(entity => {
    /*
    entities = [
    {
        url: 'https://twemoji.maxcdn.com/v/latest/svg/1f9e1.svg',
        indices: [ 2, 4 ],
        text: '🧡',
        type: 'emoji'
    }
    ]
    */
    const {
        url, // $ExpectType string
        indices, // $ExpectType [number, number]
        text, // $ExpectType string
        type, // $ExpectType "emoji"
    } = entity;
});
