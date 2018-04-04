import normalizeUrl = require('normalize-url');

let str: string;
str = normalizeUrl('sindresorhus.com');
str = normalizeUrl('HTTP://xn--xample-hva.com:80/?b=bar&a=foo');

normalizeUrl('//sindresorhus.com:80/', {normalizeProtocol: false});
normalizeUrl('https://sindresorhus.com:80/', {normalizeHttps: true});
normalizeUrl('sindresorhus.com/about.html#contact', {stripFragment: false});
normalizeUrl('http://www.sindresorhus.com/about.html#contact', {stripWWW: false});
normalizeUrl('www.sindresorhus.com?foo=bar&ref=test_ref', {
    removeQueryParameters: ['ref', /test/]
});
normalizeUrl('http://sindresorhus.com/', {removeTrailingSlash: false});
normalizeUrl('www.sindresorhus.com/foo/default.php', {
    removeDirectoryIndex: [/^default\.[a-z]+$/, 'foo']
});
