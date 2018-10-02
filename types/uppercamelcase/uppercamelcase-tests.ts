import upperCamelCase = require('uppercamelcase');

upperCamelCase('foo-bar');
upperCamelCase('foo_bar');
upperCamelCase('Foo-Bar');
upperCamelCase('--foo.bar');
upperCamelCase('__foo__bar__');
upperCamelCase('foo bar');
upperCamelCase("--foo-bar");
upperCamelCase('foo', 'bar');
upperCamelCase('__foo__', '--bar');
