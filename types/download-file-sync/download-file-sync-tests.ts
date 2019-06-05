import downloadFileSync = require('download-file-sync');
// $ExpectType string
const content = downloadFileSync('https://github.com/vjeux/download-file-sync');
