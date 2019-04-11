import getUrls = require('get-urls');

const text =
    'Lorem ipsum dolor sit amet, //sindresorhus.com consectetuer adipiscing http://yeoman.io elit.';

// $ExpectType Set<string>
getUrls(text);

// $ExpectType Set<string>
getUrls(text, { extractFromQueryString: true });

// $ExpectType Set<string>
getUrls(text, { exclude: ['foo'] });

// $ExpectType Set<string>
getUrls(text, { defaultProtocol: 'ftp' });
