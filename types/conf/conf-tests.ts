import Conf = require('conf');

const conf = new Conf<string | number | boolean>();
new Conf<string>({
    defaults: {
        foo: 'bar',
        unicorn: 'rainbow'
    },
    configName: '',
    projectName: 'foo',
    cwd: ''
});
// $ExpectError
new Conf<string>({
    defaults: {
        foo: 'bar',
        unicorn: ['rainbow']
    }
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

conf.store = {
    foo: 'bar',
    unicorn: 'rainbow'
};
conf.path; // $ExpectType string

for (const [key, value] of conf) {
    key; // $ExpectType string
    value; // $ExpectType string | number | boolean
}
