/// <reference path='../underscore/underscore.d.ts' />
/// <reference path='underscore.string.d.ts' />

_.mixin(_.string.exports());
interface UnderscoreStatic extends UnderscoreStringStaticExports { }

_.numberFormat(1000, 2);
_.numberFormat(123456789.123, 5, '.', ',');

_.levenshtein('kitten', 'kittah');

_.capitalize('foo Bar');

_.chop('whitespace', 3);

_.clean(' foo    bar   ');

_.chars('Hello');

_.swapCase('hELLO');

_.str.include('foobar', 'ob');

_.count('Hello world', 'l');

_.escapeHTML('<div>Blah blah blah</div>');

_.unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;');

_.insert('Hello ', 6, 'world');

_.isBlank('');
_.isBlank('\n');
_.isBlank(' ');
_.isBlank('a');

_.join(' ', 'foo', 'bar');

_.lines('Hello\nWorld');

_.str.reverse('foobar');

_.splice('https://edtsech@bitbucket.org/edtsech/underscore.strings', 30, 7, 'epeli');

_.startsWith('image.gif', 'image');

_.endsWith('image.gif', 'gif');

_.succ('a');
_.succ('A');

_.titleize('my name is epeli');

_.camelize('-moz-transform');

_.classify('some_class_name');

_.underscored('MozTransform');

_.dasherize('MozTransform');

_.humanize('  capitalize dash-CamelCase_underscore trim  ');

_.trim('  foobar   ');
_.trim('_-foobar-_', '_-');

_.truncate('Hello world', 5);
_.truncate('Hello', 10);

_.prune('Hello, world', 5);
_.prune('Hello, world', 8);
_.prune('Hello, world', 5, ' (read a lot more)');
_.prune('Hello, cruel world', 15);
_.prune('Hello', 10);

_.words('   I   love   you   ');
_.words('I_love_you', '_');
_.words('I-love-you', /-/);
_.words('   ');

_.sprintf('%.1f', 1.17);

_.pad('1', 8);
_.pad('1', 8, '0');
_.pad('1', 8, '0', 'right');
_.pad('1', 8, '0', 'both');
_.pad('1', 8, 'bleepblorp', 'both');

_.lpad('1', 8, '0');

_.rpad('1', 8, '0');

_.toNumber('2.556');
_.toNumber('2.556', 1);

_.strRight('This_is_a_test_string', '_');

_.strRightBack('This_is_a_test_string', '_');

_.strLeft('This_is_a_test_string', '_');

_.strLeftBack('This_is_a_test_string', '_');

_.stripTags('a <a href="#">link</a>');
_.stripTags('a <a href="#">link</a><script>alert("hello world!")</script>');

_.toSentence(['jQuery', 'Mootools', 'Prototype']);
_.toSentence(['jQuery', 'Mootools', 'Prototype'], ', ', ' unt ');

_.toSentenceSerial(['jQuery', 'Mootools']);
_.toSentenceSerial(['jQuery', 'Mootools', 'Prototype']);
_.toSentenceSerial(['jQuery', 'Mootools', 'Prototype'], ', ', ' unt ');

_.repeat('foo', 3);
_.repeat('foo', 3, 'bar');

_.surround('foo', 'ab');

_.quote('foo');

_.unquote('"foo"');
_.unquote("'foo'", "'");

_.slugify("Un éléphant à l'orée du bois");

['foo20', 'foo5'].sort(_.naturalCmp);

_.toBoolean('true');
_.toBoolean('FALSE');
_.toBoolean('random');
_.toBoolean('truthy', ['truthy'], ['falsy']);
_.toBoolean('true only at start', [/^true/]);
