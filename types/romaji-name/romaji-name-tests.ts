import { ParseResults } from 'romaji-name';
import romajiName = require('romaji-name');

romajiName.settingsFile; // $ExpectType string
romajiName.settingsFile = './settings.json';
const results: ParseResults[] = [
    {
        original: 'Kenichi Nakamura',
        locale: 'ja',
        given: "Ken'ichi",
        given_kana: 'けんいち',
        surname: 'Nakamura',
        surname_kana: 'なかむら',
        name: "Nakamura Ken'ichi",
        ascii: "Nakamura Ken'ichi",
        plain: "Nakamura Ken'ichi",
        kana: 'なかむらけんいち',
    },

    {
        original: 'Gakuryo Nakamura',
        locale: 'ja',
        given: 'Gakuryō',
        given_kana: 'がくりょう',
        surname: 'Nakamura',
        surname_kana: 'なかむら',
        name: 'Nakamura Gakuryō',
        ascii: 'Nakamura Gakuryoo',
        plain: 'Nakamura Gakuryo',
        kana: 'なかむらがくりょう',
    },
    {
        original: 'Charles Bartlett',
        locale: '',
        given: 'Charles',
        surname: 'Bartlett',
        name: 'Charles Bartlett',
        ascii: 'Charles Bartlett',
        plain: 'Charles Bartlett',
    },
];
// $ExpectType void
romajiName.init(() => {
    romajiName.parseName('Kenichi Nakamura'); // $ExpectType ParseResults
    romajiName.parseName('Kenichi Nakamura', {
        flipNonJa: true,
        givenFirst: true,
        stripParens: true,
    });
    romajiName.parseName(results[0]);
});
