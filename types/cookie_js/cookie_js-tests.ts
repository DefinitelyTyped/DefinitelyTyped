import cookie = require("cookie_js");

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

cookie.removeSpecific('a', {path: '/search'});
cookie.removeSpecific(['a', 'b'], {path: '/search'});

cookie.empty();

cookie.all();

cookie.utils;
cookie.utils.isArray('a');
cookie.utils.isArray([]);
cookie.utils.isObject('a');
cookie.utils.isObject({});
cookie.utils.toArray({});
cookie.utils.toArray([]);
cookie.utils.getKeys({});
cookie.utils.encode('a');
cookie.utils.decode('a');
cookie.utils.retrieve('a', 'b');

cookie.defaults;
cookie.defaults.expires = 1;
cookie.defaults.expires = new Date;
cookie.defaults.expires = 'Wed, 07 Feb 2018 17:00:26 GMT';
cookie.defaults.domain = 'example.com';
cookie.defaults.path = '/foo';
cookie.defaults.secure = true;
