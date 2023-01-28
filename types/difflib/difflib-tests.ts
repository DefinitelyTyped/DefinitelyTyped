import { Differ, SequenceMatcher, contextDiff, unifiedDiff } from 'difflib';

const sequenceMatcher = new SequenceMatcher(null, ['first', 'second'], ['third', 'fourth']);
sequenceMatcher.getOpcodes();

const differ = new Differ();
// $ExpectType string[]
const d = differ.compare(['one\n', 'two\n', 'three\n'], ['ore\n', 'tree\n', 'emu\n']);
// => ['- one\n', '?  ^\n', '+ ore\n', '?  ^\n', '- two\n', '- three\n', '?  -\n', '+ tree\n', '+ emu\n'];

// $ExpectType string[]
const u = unifiedDiff('one two three four'.split(' '), 'zero one tree four'.split(' '), {
    fromfile: 'Original',
    tofile: 'Current',
    fromfiledate: '2005-01-26 23:30:50',
    tofiledate: '2010-04-02 10:20:52',
    lineterm: '',
});
// => ['--- Original\t2005-01-26 23:30:50', '+++ Current\t2010-04-02 10:20:52', '@@ -1,4 +1,4 @@',
// '+zero', ' one', '-two', '-three', '+tree', ' four'];

// $ExpectType string[]
const c = contextDiff(['one\n', 'two\n', 'three\n', 'four\n'], ['zero\n', 'one\n', 'tree\n', 'four\n'], {
    fromfile: 'Original',
    tofile: 'Current',
});
// => ['*** Original\n', '--- Current\n', '***************\n', '*** 1,4 ****\n',
// '  one\n', '! two\n', '! three\n', '  four\n', '--- 1,4 ----\n', '+ zero\n',
// '  one\n', '! tree\n', '  four\n'];
