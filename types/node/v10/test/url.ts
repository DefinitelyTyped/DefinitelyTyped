import * as url from 'url';

// `format doesn't work with `path`: use `pathname` and `search` instead
// $ExpectError
url.format({ path: '/foo' });
