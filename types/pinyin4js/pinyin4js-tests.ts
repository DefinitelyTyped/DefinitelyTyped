import pinyin4js = require("pinyin4js");

pinyin4js.FIRST_LETTER;
pinyin4js.WITHOUT_TONE;
pinyin4js.WITH_TONE_MARK;
pinyin4js.WITH_TONE_NUMBER;

pinyin4js.convertToPinyinString('厦门你好大厦厦门', '#', pinyin4js.FIRST_LETTER);
pinyin4js.convertToPinyinString('厦门你好大厦厦门', '#', pinyin4js.WITHOUT_TONE);
pinyin4js.convertToPinyinString('厦门你好大厦厦门', '#', pinyin4js.WITH_TONE_MARK);
pinyin4js.convertToPinyinString('厦门你好大厦厦门', '#', pinyin4js.WITH_TONE_NUMBER);
pinyin4js.getShortPinyin('厦门你好大厦厦门');
pinyin4js.convertToTraditionalChinese('厦门你好大厦厦门');
pinyin4js.convertToSimplifiedChinese('厦门你好大厦厦门');
