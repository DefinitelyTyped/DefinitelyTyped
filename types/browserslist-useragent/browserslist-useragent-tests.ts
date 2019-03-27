import {
    matchesUA,
    resolveUserAgent,
    normalizeQuery
} from 'browserslist-useragent';

// $ExpectType boolean
matchesUA(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
);

// $ExpectType boolean
matchesUA(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
    {
        browsers: ['defaults'],
        env: 'production',
        ignorePath: true,
        ignoreMinor: false,
        allowHigherVersions: false
    }
);

// $ExpectType ResolvedUserAgent
resolveUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36'
);

// $ExpectType string
normalizeQuery('defaults');
