import normalizeUrl = require('normalize-url');

let str: string;
str = normalizeUrl('sindresorhus.com');
str = normalizeUrl('HTTP://xn--xample-hva.com:80/?b=bar&a=foo#contact');

normalizeUrl('sindresorhus.com:80/', {defaultProtocol: 'https:'});
normalizeUrl('//sindresorhus.com:80/', {normalizeProtocol: false});
normalizeUrl('https://sindresorhus.com:80/', {forceHttp: true});
normalizeUrl('http://sindresorhus.com:80/', {forceHttps: true});
normalizeUrl('sindresorhus.com/about.html#contact', {stripHash: false});
normalizeUrl('http://www.sindresorhus.com/about.html#contact', {stripWWW: false});
normalizeUrl('www.sindresorhus.com?foo=bar&ref=test_ref', { removeQueryParameters: ['ref', /test/] });
normalizeUrl('http://sindresorhus.com/', {removeTrailingSlash: false});
normalizeUrl('www.sindresorhus.com/foo/default.php', { removeDirectoryIndex: [/^default\.[a-z]+$/, 'foo'] });
normalizeUrl('www.sindresorhus.com/foo/index.php', { removeDirectoryIndex: true });
normalizeUrl('www.sindresorhus.com?b=foo&a=bar', { sortQueryParameters: false });
