import getPort = require('get-port');

// $ExpectType Promise<number>
getPort();
// $ExpectType Promise<number>
getPort({ port: 3000 });
// $ExpectType Promise<number>
getPort({ port: [3000, 3001] });
// $ExpectType Promise<number>
getPort({ host: 'foo.local' });
