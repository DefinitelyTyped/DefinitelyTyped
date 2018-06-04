import write = require('write-json-file');

// Basic
write('foo.json', {foo: true}).then(() => { });
write.sync('foo.json', {foo: true});

// With options
const options: write.Options = {
    indent: '  ',
    detectIndent: true,
    sortKeys: true,
    mode: 0o666
};
write('foo.json', {foo: true}, options).then(() => { });
write('foo.json', {foo: true}, {indent: 2}).then(() => { });
write('foo.json', {foo: true}, {indent: null}).then(() => { });
write('foo.json', {foo: true}, {sortKeys: (key1, key2) => key1 > key2 ? 1 : key1 < key2 ? -1 : 0}).then(() => { });
write.sync('foo.json', {foo: true}, options);

// JSON.stringify replacer
function replacer(key: any, value: any) {
  // Filtering out properties
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

write.sync('foo.json', {foo: true}, {replacer});
write.sync('foo.json', {foo: true}, {replacer: null});
write.sync('foo.json', {foo: true}, {replacer: [1, 2, 3]});
write.sync('foo.json', {foo: true}, {replacer: ['a', 'b', 'c']});

JSON.stringify({foo: true}, replacer);
JSON.stringify({foo: true}, null);
JSON.stringify({foo: true}, [1, 2, 3]);
JSON.stringify({foo: true}, ['a', 'b', 'c']);
