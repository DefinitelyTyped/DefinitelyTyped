import hepburn = require('hepburn');
import {
    cleanRomaji,
    containsHiragana,
    containsKana,
    containsKanji,
    containsKatakana,
    fromKana,
    splitKana,
    splitRomaji,
    toHiragana,
    toKatakana,
} from 'hepburn';

hepburn.fromKana('ひらがな'); // $ExpectType string
hepburn.toHiragana('HIRAGANA'); // $ExpectType string
hepburn.toKatakana('TŌKYŌ'); // $ExpectType string
hepburn.cleanRomaji('SYUNNEI'); // $ExpectType string
hepburn.splitKana('ひらがな'); // $ExpectType string[]
hepburn.splitRomaji('TŌKYŌ'); // $ExpectType string[]
hepburn.containsHiragana('ひらがな'); // $ExpectType boolean
hepburn.containsKatakana('トーキョー'); // $ExpectType boolean
hepburn.containsKana('ひらがな'); // $ExpertType boolean
hepburn.containsKanji('漢字'); // $ExportType boolean

fromKana('ひらがな'); // $ExpectType string
toHiragana('HIRAGANA'); // $ExpectType string
toKatakana('TŌKYŌ'); // $ExpectType string
cleanRomaji('SYUNNEI'); // $ExpectType string
splitKana('ひらがな'); // $ExpectType string[]
splitRomaji('TŌKYŌ'); // $ExpectType string[]
containsHiragana('ひらがな'); // $ExpectType boolean
containsKatakana('トーキョー'); // $ExpectType boolean
containsKana('ひらがな'); // $ExpertType boolean
containsKanji('漢字'); // $ExportType boolean
