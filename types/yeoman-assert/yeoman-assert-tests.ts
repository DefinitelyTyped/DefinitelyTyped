import * as assert from 'yeoman-assert';

assert.file('path');
assert.file(['path', 'path2']);

assert.noFile('path');
assert.noFile(['path', 'path2']);

assert.fileContent('file', /abc/g);
assert.fileContent(['file', 'file2'], 'abc');

assert.equalsFileContent('file', 'expectedContent');
assert.equalsFileContent([['file', 'expectedContent'], ['file2', 'expectedContent2']]);

assert.noFileContent('file', /abc/g);
assert.noFileContent(['file', 'file2'], 'abc');

assert.textEqual('value', 'expected');
assert.implement({value: 'test'}, {other: 'test2'});
assert.implement({value: 'test'}, ['test2', 'test3']);

assert.notImplement({value: 'test'}, {other: 'test2'});
assert.notImplement({value: 'test'}, ['test2', 'test3']);

assert.objectContent({value: 'test'}, {value: 'test2'});
assert.noObjectContent({value: 'test'}, {value: 'test2'});

assert.JSONFileContent('filename', {root: 'content'});
assert.jsonFileContent('filename', {root: 'content'});

assert.noJSONFileContent('filename', {root: 'content'});
assert.noJsonFileContent('filename', {root: 'content'});

assert.equal('test', 'expected');
