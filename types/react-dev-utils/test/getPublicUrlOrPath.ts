import getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');

getPublicUrlOrPath(true, undefined, undefined);
getPublicUrlOrPath(true, '/', undefined);
getPublicUrlOrPath(true, undefined, '/');
getPublicUrlOrPath(true, '/', '/');
getPublicUrlOrPath(true, '/', '/'); // $ExpectType string
getPublicUrlOrPath(true); // $ExpectError
getPublicUrlOrPath(true, undefined); // $ExpectError
getPublicUrlOrPath(true, '/'); // $ExpectError
