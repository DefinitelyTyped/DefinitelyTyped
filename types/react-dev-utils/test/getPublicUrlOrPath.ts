import getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

getPublicUrlOrPath(true, undefined, undefined);
getPublicUrlOrPath(true, '/', undefined);
getPublicUrlOrPath(true, undefined, '/');
getPublicUrlOrPath(true, '/', '/');
getPublicUrlOrPath(true, '/', '/'); // $ExpectType string
// @ts-expect-error
getPublicUrlOrPath(true);
// @ts-expect-error
getPublicUrlOrPath(true, undefined);
// @ts-expect-error
getPublicUrlOrPath(true, '/');
