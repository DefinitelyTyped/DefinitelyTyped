import PinyinEngine = require('pinyin-engine');

const pinyinEngine = new PinyinEngine([
    '清华大学',
    '北京大学',
    '中央美院',
]);

pinyinEngine.query('daxue'); // ['清华大学', '北京大学']
