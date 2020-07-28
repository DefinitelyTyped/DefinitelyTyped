import * as wanakana from "wanakana";

wanakana.isJapanese('泣き虫。！〜２￥ｚｅｎｋａｋｕ'); // $ExpectType boolean
wanakana.isKana('あーア'); // $ExpectType boolean
wanakana.isHiragana('すげー'); // $ExpectType boolean
wanakana.isKatakana('ゲーム'); // $ExpectType boolean
wanakana.isKanji('切腹'); // $ExpectType boolean
wanakana.isRomaji('Tōkyō and Ōsaka'); // $ExpectType boolean

wanakana.toKana('ONAJI buttsuuji'); // $ExpectType string
wanakana.toKana('wanakana', { customKanaMapping: { na: 'に', ka: 'bana' }}); // $ExpectType string

wanakana.toHiragana('toukyou, オオサカ'); // $ExpectType string
wanakana.toHiragana('only カナ', { passRomaji: true }); // $ExpectType string

wanakana.toKatakana('toukyou, おおさか'); // $ExpectType string
wanakana.toKatakana('only かな', { passRomaji: true }); // $ExpectType string

wanakana.toRomaji('ひらがな カタカナ'); // $ExpectType string
wanakana.toRomaji('ひらがな カタカナ', { upcaseKatakana: true }); // $ExpectType string

wanakana.stripOkurigana('お祝い'); // $ExpectType string
wanakana.stripOkurigana('お腹', { leading: true }); // $ExpectType string

wanakana.tokenize('ふふフフ'); // $ExpectType string[]
wanakana.tokenize('I said 私はすごく悲しい', { compact: true }); // $ExpectType string[]
