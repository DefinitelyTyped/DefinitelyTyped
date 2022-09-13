import PinyinEngine = require('pinyin-engine');

// 列表项为 string
const pinyinEngineString = new PinyinEngine([
    '清华大学',
    '北京大学',
    '中央美院',
]);

pinyinEngineString.query('daxue'); // ['清华大学', '北京大学']

// 列表项为 object
const pinyinEngineObject = new PinyinEngine([
    { id: 0, name: '清华大学' },
    { id: 1, name: '北京大学' },
    { id: 2, name: '中央美院' }
], ['name']);

pinyinEngineObject.query('daxue'); // ['清华大学', '北京大学']
