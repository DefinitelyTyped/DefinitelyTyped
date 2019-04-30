import snakecaseKeys = require('snakecase-keys');

snakecaseKeys({ fooBar: 'baz' });
snakecaseKeys({ fooBar: 'baz' }, { deep: false });
snakecaseKeys({ fooBar: 'baz' }, { exclude: ['fooBax', /Foo$/] });
