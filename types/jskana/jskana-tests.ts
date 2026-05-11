import {
    hiraganaToKatakana,
    isHiragana,
    isKanji,
    isKatakana,
    isPunctuation,
    isRomaji,
    kanaToRomaji,
    katakanaToHiragana,
    romajiToHiragana,
    romajiToKatakana,
    splitKanaString,
} from "jskana";

hiraganaToKatakana("「うまい もも こっちゃ こい。 にがい もも あっちゃ いけ。」 と いったら、 "); // $ExpectType string
isHiragana("かに さん。 にぎりめし より"); // $ExpectType boolean
isKanji("日一大年中"); // $ExpectType boolean
isKatakana("アメリカ XYZ"); // $ExpectType boolean
isPunctuation("『モー人本あっ』"); // $ExpectType boolean
isRomaji("kochani"); // $ExpectType boolean
kanaToRomaji("こちゃに れもんを いれます。"); // $ExpectType string
katakanaToHiragana("アメリカ XYZ"); // $ExpectType string
romajiToHiragana("kochani remonwo iremasu"); // $ExpectType string
romajiToKatakana("kochani remonwo iremasu"); // $ExpectType string
splitKanaString("あっさり"); // $ExpectType string[]
