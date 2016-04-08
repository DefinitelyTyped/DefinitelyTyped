/// <reference path="cookiejs.d.ts" />

// Based on https://github.com/js-coder/cookie.js/blob/gh-pages/tests/spec.js

cookie.set({a: '1', b: '2', c: '3'});

cookie;
cookie.enabled();

cookie.set('n', '5');

cookie.get('a');
cookie.get('__undef__');
cookie.get('__undef__', 'fallback');
cookie.get(['a', 'b']);
cookie.get(['a', '__undef__'], 'fallback');

cookie('a');
cookie('__undef__');
cookie('__undef__', 'fallback');
cookie(['a', 'b']);
cookie(['a', '__undef__'], 'fallback');

cookie.remove('a');
cookie.remove('a', 'b');
cookie.remove(['a', 'b']);

cookie.empty();

cookie.all();
