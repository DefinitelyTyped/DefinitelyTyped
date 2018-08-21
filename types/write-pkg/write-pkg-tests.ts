import WritePkg = require('write-pkg');

WritePkg('package.json', { version: 1 }); // $ExpectType Promise<void>
WritePkg({ version: 1 }); // $ExpectType Promise<void>
WritePkg.sync('package.json', { version: 1 }); // $ExpectType void
WritePkg.sync({ version: 1 }); // $ExpectType void
