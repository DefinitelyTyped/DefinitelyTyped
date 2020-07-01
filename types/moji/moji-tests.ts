import moji = require('moji');

moji('ＡＢＣＤ０１２３４').convert('ZE', 'HE').toString();
moji('ABCD01234').convert('HE', 'ZE').toString();
// tslint:disable-next-line:no-irregular-whitespace
moji('　').convert('ZS', 'HS').toString();
moji('あいうえお').convert('HG', 'KK').toString();
moji('アイウエオ').convert('KK', 'HG').toString();
moji('アイウエオ').convert('ZK', 'HK').toString();
moji('ｱｲｳｴｵ').convert('HK', 'ZK').toString();
moji('ｱｲｳｴｵ').convert('HK', 'ZK').convert('KK', 'HG').toString();

moji(' ｱｲｳｴｵ ').trim().toString();

moji('abcあいうアイウ123').filter('HG').toString();

moji('abcあいうアイウ123').reject('HG').toString();

moji.addMojisyu('ZE', { start: 0xff01, end: 0xff5e });
moji.addMojisyu('HK', {
  regexp: /([\uff66-\uff9c]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])/g,
  list: ["｡", "｢", "｣"]
});
