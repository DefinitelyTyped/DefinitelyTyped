import moveFile = require('move-file');

// $ExpectType Promise<void>
moveFile('source/unicorn.png', 'destination/unicorn.png');
// $ExpectType Promise<void>
moveFile('source/unicorn.png', 'destination/unicorn.png', { overwrite: false });
// $ExpectType void
moveFile.sync('source/unicorn.png', 'destination/unicorn.png');
// $ExpectType void
moveFile.sync('source/unicorn.png', 'destination/unicorn.png', { overwrite: false });
