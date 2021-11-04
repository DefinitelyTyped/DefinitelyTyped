const romaji = romajiConv('アノイヌチャウチャウトチャウンチャウ');
romaji.toHiragana(); // $ExpectType string
romaji.toKatakana(); // $ExpectType string
romajiConv.toKatakana('ほげほげ'); // $ExpectType string
romajiConv.toHiragana('ホゲホゲ'); // $ExpectType string
