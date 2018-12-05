import { transliterate as tr, slugify } from 'transliteration';

tr('你好，世界'); // Ni Hao , Shi Jie
tr('Γεια σας, τον κόσμο'); // Geia sas, ton kosmo
tr('안녕하세요, 세계'); // annyeonghaseyo, segye
tr('你好，世界', { replace: {你: 'You'}, ignore: ['好'] }); // You 好, Shi Jie
tr('你好，世界', { replace: [['你', 'You']], ignore: ['好'] }); // You 好, Shi Jie (option in array form)
// or use configurations
tr.config({ replace: [['你', 'You']], ignore: ['好'] });
tr('你好，世界'); // You 好, Shi Jie
// get configurations
const opt1 = tr.config();
opt1.ignore = ['foo', 'bar', 'baz'];
opt1.ignore = undefined;
opt1.replace = [['a', 'foo'], ['b', 'bar']];
opt1.replace = {a: 'foo', b: 'bar', c: 'baz'};
opt1.replace = undefined;
opt1.unknown = '***?***';
opt1.unknown = undefined;

slugify('你好，世界'); // ni-hao-shi-jie
slugify('你好，世界', { lowercase: false, separator: '_' }); // Ni_Hao_Shi_Jie
slugify('你好，世界', { replace: {你好: 'Hello', 世界: 'world'}, separator: '_' }); // hello_world
slugify('你好，世界', { replace: [['你好', 'Hello'], ['世界', 'world']], separator: '_' }); // hello_world (option in array form)
slugify('你好，世界', { ignore: ['你好'] }); // 你好shi-jie
// or use configurations
slugify.config({ lowercase: false, separator: '_' });
slugify('你好，世界'); // Ni_Hao_Shi_Jie
// get configurations
const opt2 = slugify.config();
opt2.ignore = ['foo', 'bar', 'baz'];
opt2.ignore = undefined;
opt2.replace = [['a', 'foo'], ['b', 'bar']];
opt2.replace = {a: 'foo', b: 'bar', c: 'baz'};
opt2.replace = undefined;
opt2.lowercase = false;
opt2.lowercase = true;
opt2.lowercase = undefined;
opt2.separator = ';';
opt2.separator = undefined;
