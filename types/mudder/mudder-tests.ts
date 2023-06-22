import * as mudder from 'mudder';

const abc = new mudder.SymbolTable('abc');

abc.mudder(123); // $ExpectType string[]
abc.mudder('a', 'c'); // $ExpectType string[]
abc.mudder('a', 'c', 3, undefined, 100); // $ExpectType string[]
abc.mudder('a', 'c', 3, 4, 100); // $ExpectType string[]
abc.mudder('a', 'c', 3, 4, 100, 6); // $ExpectType string[]

new mudder.SymbolTable(['def', 'deg'], { def: 0, deg: 1 });
