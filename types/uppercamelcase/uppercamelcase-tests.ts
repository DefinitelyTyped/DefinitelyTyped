import upperCamelCase = require('uppercamelcase');
import * as upperCamelCase2 from "uppercamelcase";

upperCamelCase('foo-bar');
//=> FooBar

upperCamelCase('foo_bar');
//=> FooBar

upperCamelCase('Foo-Bar');
//=> FooBar

upperCamelCase('--foo.bar');
//=> FooBar

upperCamelCase('__foo__bar__');
//=> FooBar

upperCamelCase('foo bar');
//=> FooBar

upperCamelCase("--foo-bar");
//=> FooBar

upperCamelCase('foo', 'bar');
//=> 'FooBar'

upperCamelCase('__foo__', '--bar');
//=> 'FooBar'
