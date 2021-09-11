import romajiConv = require('@koozaki/romaji-conv');
import { toHiragana, toKatakana } from '@koozaki/romaji-conv';

const romaji = romajiConv('アノイヌチャウチャウトチャウンチャウ');
romaji.toHiragana(); // $ExpectType string
romaji.toKatakana(); // $ExpectType string
toKatakana('ほげほげ'); // $ExpectType string
toHiragana('ホゲホゲ'); // $ExpectType string
