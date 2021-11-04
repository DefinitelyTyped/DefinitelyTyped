import enamdict = require('enamdict');
import { Entry } from 'enamdict';

const entries: Entry[] = [
    {
        romaji: 'Utagawa',
        kana: 'うたがわ',
        kanji: ['哥川', '唄川', '宇多川', '宇田川', '歌川', '詩川', '雅楽川'],
        type: 'surname',
    },
    {
        romaji: ['katsugawa', 'katsukawa'],
        kana: ['かつがわ', 'かつかわ'],
        kanji: '曷川',
        type: 'surname',
    },
];

enamdict.init(() => {
    const entries = enamdict.find('utagawa'); // $ExpectType Entries
    entries.romaji(); // $ExpectType string | string[]
    entries.kana(); // $ExpectType string | string[]
    entries.kanji(); // $ExpectType string | string[]
    entries.type(); // $ExpectType NameType
    enamdict.findKanji('曷川'); // $ExpectType Entries
    // $$ExpectType Entry[]
    entries.entries().forEach(entry => {
        entry.kana; // $ExpectType string | string[]
        entry.kanji; // $ExpectType string | string[]
        entry.romaji; // $ExpectType string | string[]
        entry.type; // $ExpectType NameType
    });
});
