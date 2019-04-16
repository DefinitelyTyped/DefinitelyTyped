import getFolderSize = require('get-folder-size');

getFolderSize('.', (err: Error | null, size: number) => {});

getFolderSize('.', /types/, (err: Error | null, size: number) => {});
