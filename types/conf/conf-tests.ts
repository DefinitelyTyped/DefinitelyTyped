import Conf = require('conf');

const conf = new Conf<string | number | boolean>();
new Conf<string>({
    defaults: {
        foo: 'bar',
        unicorn: 'rainbow',
    },
});
new Conf<string>({ configName: '' });
new Conf<string>({ projectName: 'foo' });
new Conf<string>({ cwd: '' });
new Conf<string>({ encryptionKey: '' });
new Conf<string>({ encryptionKey: new Buffer('') });
new Conf<string>({ encryptionKey: new Uint8Array([1]) });
new Conf<string>({ encryptionKey: new DataView(new ArrayBuffer(2)) });
new Conf<string>({ fileExtension: '.foo' });

// $ExpectError
new Conf<string>({
    defaults: {
        foo: 'bar',
        unicorn: ['rainbow'],
    },
});
conf.set('foo', 'bar');
conf.set('hello', 1);
conf.set('unicorn', false);
conf.set('null', null); // $ExpectError

conf.get('foo'); // $ExpectType string | number | boolean
conf.get('foo', 'bar'); // $ExpectType string | number | boolean
conf.get('foo', null); // $ExpectError
conf.delete('foo');
conf.has('foo'); // $ExpectType boolean
conf.clear();
conf.onDidChange('foo', (oldVal, newVal) => {
    // $ExpectType string | number | boolean | undefined
    oldVal;
    // $ExpectType string | number | boolean | undefined
    newVal;
});

conf.size; // $ExpectType number
conf.store = {
    foo: 'bar',
    unicorn: 'rainbow',
};
conf.path; // $ExpectType string

for (const [key, value] of conf) {
    key; // $ExpectType string
    value; // $ExpectType string | number | boolean
}
