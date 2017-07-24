import pinyin = require("pinyin");

pinyin("中心");
pinyin("中心", {
    heteronym: true
});
pinyin("中心", {
    heteronym: true,
    segment: true
});
pinyin("中心", {
    style: pinyin.STYLE_INITIALS,
    heteronym: true
});

pinyin.compare('测', '这');

pinyin.STYLE_NORMAL;
pinyin.STYLE_TONE;
pinyin.STYLE_TONE2;
pinyin.STYLE_TO3NE;
pinyin.STYLE_INITIALS;
pinyin.STYLE_FIRST_LETTER;