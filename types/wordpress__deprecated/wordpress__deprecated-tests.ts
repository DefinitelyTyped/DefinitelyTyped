import deprecated, { logged } from '@wordpress/deprecated';

// $ExpectType void
deprecated('foo');

deprecated('foo', { alternative: 'bar' });
deprecated('foo', { hint: 'bar' });
deprecated('foo', { link: 'bar' });
deprecated('foo', { plugin: 'bar' });
deprecated('foo', { version: 'bar' });
deprecated('foo', { alternative: 'bar', hint: 'baz', version: 'qux' });

// $ExpectType Record<string, boolean | undefined>
logged;

// $ExpectType boolean | undefined
logged.foo;
