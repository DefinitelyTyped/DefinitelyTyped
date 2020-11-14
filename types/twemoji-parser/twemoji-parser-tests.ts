import twemojiParser = require('twemoji-parser');
import { parse, toCodePoints } from 'twemoji-parser';

twemojiParser.parse('I 🧡 Twemoji! 🥳'); // $ExpectType EmojiEntity[]
const entities = parse('I 🧡 Twemoji! 🥳'); // $ExpectType EmojiEntity[]
twemojiParser.toCodePoints('\uD83D\uDE03'); // $ExpectType string[]
const codePoints = toCodePoints('\uD83D\uDE03'); // $ExpectType string[]

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
