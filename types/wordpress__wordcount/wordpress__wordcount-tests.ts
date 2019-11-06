import { count } from '@wordpress/wordcount';

// $ExpectType number
count('hello world', 'words');

// $ExpectType number
count('hello world', 'characters_excluding_spaces', {});

// $ExpectType number
count('hello world', 'characters_including_spaces', {
    HTMLRegExp: /foo/,
    astralRegExp: new RegExp('foo'),
    l10n: {
        shortcodes: ['foo', 'bar'],
    },
});
