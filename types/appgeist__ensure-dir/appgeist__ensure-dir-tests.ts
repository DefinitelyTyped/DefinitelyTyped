import ensureDir = require('appgeist__ensure-dir');

// $ExpectType Promise<void>
ensureDir('a dir');

// $ExpectError
ensureDir();
