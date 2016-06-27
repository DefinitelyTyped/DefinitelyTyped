
import camelCase = require('camelcase');

camelCase('foo-bar');
camelCase('foo_bar');
camelCase('Foo-Bar');
camelCase('--foo.bar');
camelCase('__foo__bar__');
camelCase('foo bar');
camelCase('foo', 'bar');
camelCase('__foo__', '--bar');
