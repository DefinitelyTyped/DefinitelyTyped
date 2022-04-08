import * as shortcode from '@wordpress/shortcode';

// $ExpectType ShortcodeAttrs
shortcode.attrs('foo=foo bar baz="baz"');

// $ExpectType void
shortcode.attrs.clear();

// $ExpectType Shortcode
shortcode.fromMatch(shortcode.regexp('foo').exec('hello [foo] world')!);

// $ExpectType ShortcodeMatch | undefined
shortcode.next('foo', 'hello [foo] world');

// $ExpectType ShortcodeMatch | undefined
shortcode.next('foo', 'hello [foo] world', 5);

// $ExpectType string
shortcode.replace('foo', 'hello [foo] world', sc => sc.tag);

// $ExpectType string
shortcode.string({ tag: 'foo' });

// $ExpectType string
shortcode.string({ tag: 'foo', attrs: { named: { foo: 'bar' } } });

//
// class tests
// ----------------------------------------------------------------------------

// $ExpectType ShortcodeAttrs
shortcode.default.attrs('foo=foo bar baz="baz"');

// $ExpectType void
shortcode.default.attrs.clear();

// $ExpectType Shortcode
shortcode.default.fromMatch(shortcode.regexp('foo').exec('hello [foo] world')!);

// $ExpectType ShortcodeMatch | undefined
shortcode.default.next('foo', 'hello [foo] world');

// $ExpectType ShortcodeMatch | undefined
shortcode.default.next('foo', 'hello [foo] world', 5);

// $ExpectType string
shortcode.default.replace('foo', 'hello [foo] world', sc => sc.tag);

// $ExpectType string
shortcode.default.string({ tag: 'foo' });

let shortcodeInstance = new shortcode.default();
shortcodeInstance = new shortcode.default({});
// $ExpectType shortcode
shortcodeInstance = new shortcode.default({ tag: 'foo', content: 'bar' });

// $ExpectType ShortcodeAttrs
shortcodeInstance.attrs;

// $ExpectType string | undefined
shortcodeInstance.content;

// $ExpectType string | undefined
shortcodeInstance.tag;

// $ExpectType "closed" | "self-closing" | "single" | undefined
shortcodeInstance.type;

// $ExpectType string | undefined
shortcodeInstance.get('foo');

// $ExpectType string | undefined
shortcodeInstance.get(0);

shortcodeInstance
    .set('foo', 'bar')
    .set('baz', 'quux')
    .set(0, 'foobar');
