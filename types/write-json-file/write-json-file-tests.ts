import * as write from 'write-json-file';

// Basic
write('foo.json', {foo: true}).then(() => { });
write.sync('foo.json', {foo: true});

// JSON.stringify replacer
function replacer(key: any, value: any) {
  // Filtering out properties
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

// With options
const options: write.Options = {
    indent: '  ',
    detectIndent: true,
    sortKeys: true,
    replacer,
    mode: 0o666
};
write('foo.json', {foo: true}, options).then(() => { });
write.sync('foo.json', {foo: true}, options);
