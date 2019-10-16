import walk = require('ignore-walk');

walk({
  path: process.cwd(),
  ignoreFiles: ['.gitignore'],
  includeEmpty: true
});

walk().then((results) => {
  console.log(results);
});

walk.sync({path: '/path/to/file'});
walk.sync();

const walker = new walk.WalkerSync();
console.log((walker.start().result as string[]).filter(entry => entry.substring(0, 5) !== '.git/'));
