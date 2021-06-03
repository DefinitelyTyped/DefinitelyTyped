import { blacklisted, addWords, removeWord, clearList } from 'wordfilter';

// $ExpectType boolean
blacklisted('this is some kind of string');

addWords('foo');
addWords(['bar', 'baz']);
// $ExpectError
addWords(3);

removeWord('foo');

clearList();
