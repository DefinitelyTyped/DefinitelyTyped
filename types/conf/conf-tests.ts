import Conf = require('conf');

const conf = new Conf();
conf.set('foo', 'bar');
conf.set('hello', 1);
conf.set('unicorn', false);
conf.set('object', {
	foo: 'bar',
	unicorn: ['rainbow']
});

conf.get('foo');
conf.delete('foo');
conf.has('foo');
conf.clear();

for (const value of conf) {
	console.log(value[0], value[1]);
}
