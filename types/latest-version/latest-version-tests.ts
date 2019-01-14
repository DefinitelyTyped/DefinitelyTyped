import latestVersion = require('latest-version');

latestVersion('ava'); // $ExpectType Promise<string>
latestVersion('npm', { version: 'latest-5' }); // $ExpectType Promise<string>
