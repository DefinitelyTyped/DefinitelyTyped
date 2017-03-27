
import merge = require('tea-merge');

merge({ a: 1 }, { b: 2 }, { c: 'hello' });
merge({ a1: true, a2: { b: 'hello' } }, { bca: [], a2: { c: 'world' } });
